const glob = require("glob");

function compile(input) {
    return import("execa").then( ({execa}) => execa("solc",[
        "--standard-json",
        "--base-path",
        ".",
        "--include-path",
        "node_modules"
    ], {
        input: input
    }));
}

function compileGlob(pattern) {
    var files = glob.sync(pattern)
    return import("execa").then( ({execa}) => execa("solc",[
        "--bin",
        "--abi",
        "--ast",
        "--base-path",
        ".",
        "--include-path",
        "node_modules",
        ...files
    ]));
}

compile.glob = compileGlob;

function compileJs(input) {
    
    function findImports(path) {
        try {
        return {
            contents: fs.readFileSync(require.resolve(path), "utf-8"),
        };
        } catch (err) {
            return { error: err.toString() };
        }
    }
  

    return require('solc').compile(input, {
        import: findImports
    });
}

compile.js = compileJs;

module.exports = compile;
