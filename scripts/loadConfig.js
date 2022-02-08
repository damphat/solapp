const fs = require('fs');
const deepmerge = require("deepmerge");
const { join } = require('path');

const defautConfig = {
  pattern: "contracts/**/*.sol",
  networks: {},
  compilers: {
    solc: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "byzantium",
        outputSelection: {
          "*": {
            "": [
              "legacyAST",
              "ast"
            ],
            "*": [
              "abi",
              "evm.bytecode.object",
              "evm.bytecode.sourceMap",
              "evm.deployedBytecode.object",
              "evm.deployedBytecode.sourceMap"
            ]
          },
        }
      },
    },
  },
};

function loadConfig(config) {
    let outputConfig = defautConfig;
    
    const configPath = join(process.cwd(), 'solapp.config.js');
    if (fs.existsSync(configPath)) {
      outputConfig = deepmerge(outputConfig, require(configPath));
    } else {
      console.warn($`You should have 'solapp.config.js' at the working directory '${process.cwd()}'`);
    }

    if (config) {
      outputConfig = deepmerge(outputConfig, config);
    }

    return outputConfig;
}

module.exports = loadConfig;
