module.exports = {
    "language": "Solidity",
    "sources": {},
    "settings": {
      "optimizer": {
        "enabled": true,
        "runs": 200,
      },
      "evmVersion": "byzantium",

      // "outputSelection: { "*": { "*": [ "*" ], "": [ "*" ] } }"
      // File level (needs empty string as contract name):
      //   ast - AST of all source files
      // Contract level (needs the contract name or "*"):
      //   abi - ABI
      //   devdoc - Developer documentation (natspec)
      //   userdoc - User documentation (natspec)
      //   metadata - Metadata
      //   ir - Yul intermediate representation of the code before optimization
      //   irOptimized - Intermediate representation after optimization
      //   storageLayout - Slots, offsets and types of the contract's state variables.
      //   evm.assembly - New assembly format
      //   evm.legacyAssembly - Old-style assembly format in JSON
      //   evm.bytecode.functionDebugData - Debugging information at function level
      //   evm.bytecode.object - Bytecode object
      //   evm.bytecode.opcodes - Opcodes list
      //   evm.bytecode.sourceMap - Source mapping (useful for debugging)
      //   evm.bytecode.linkReferences - Link references (if unlinked object)
      //   evm.bytecode.generatedSources - Sources generated by the compiler
      //   evm.deployedBytecode* - Deployed bytecode (has all the options that evm.bytecode has)
      //   evm.deployedBytecode.immutableReferences - Map from AST ids to bytecode ranges that reference immutables
      //   evm.methodIdentifiers - The list of function hashes
      //   evm.gasEstimates - Function gas estimates
      //   ewasm.wast - Ewasm in WebAssembly S-expressions format
      //   ewasm.wasm - Ewasm in WebAssembly binary format
      //
      // Note that using a using `evm`, `evm.bytecode`, `ewasm`, etc. will select every
      // target part of that output. Additionally, `*` can be used as a wildcard to request everything.
      //
      "outputSelection": {
        "*": {
          "*": [
            "metadata", "evm.bytecode" // Enable the metadata and bytecode outputs of every single contract.
            , "evm.bytecode.sourceMap" // Enable the source map output of every single contract.
          ],
          "": [
            "ast" // Enable the AST output of every single file.
          ]
        },
      },
    }
  }