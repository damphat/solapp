const blob = require("glob");
const solc = require("solc");
const fs = require("fs");
const config = require("./loadConfig")();

async function main() {
  const input = {
    language: "Solidity",
    sources: {},
    settings: config.compilers.solc.settings,
  };

  const files = blob.sync(config.pattern);

  files.forEach((file) => {
    input.sources[file] = {
      content: fs.readFileSync(file, "utf-8"),
    };
  });

  let outputString;
  
  outputString = solc.compileS(JSON.stringify(input), {
    import: function findImports(path) {
      try {
        return { contents: fs.readFileSync(require.resolve(path), "utf-8") };
      } catch (err) {
        return { error: err.toString() };
      }
    },
  });

  // let outputObj = await import("execa").then(({execa}) => execa("solc.exe", [
  //   "--standard-json",
  //   "--base-path",
  //   ".",
  //   "--include-path",
  //   "node_modules"
  // ], {
  //   input: JSON.stringify(input)
  // }));

  // outputString = outputObj.stdout;

  const output = JSON.parse(outputString);

  if (output.errors) {
    output.errors.forEach((err) => {
      console.error(err.formattedMessage);
    });
    return;
  }

  if (!fs.existsSync("build/contracts")) {
    fs.mkdirSync("build/contracts", { recursive: true });
  }

  fs.writeFileSync('build/input.json', JSON.stringify(input, null, 2));

  for (const [_, file] of Object.entries(output.contracts)) {
    for (const [name, value] of Object.entries(file)) {
      const content = Object.assign({ contractName: name }, value);

      fs.writeFileSync(
        `build/contracts/${name}.json`,
        JSON.stringify(content, null, 2)
      );
    }
  }
}

main().catch(console.error);
