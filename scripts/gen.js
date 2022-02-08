const { runTypeChain, glob } = require('typechain')

async function main() {
  const cwd = process.cwd()
  const allFiles = glob(cwd, [`build/!(build-info)/**/+([a-zA-Z0-9_]).json`])

  const result = await runTypeChain({
    cwd,
    filesToProcess: allFiles,
    allFiles,
    outDir: 'types/ethers-v5',
    target: 'ethers-v5',
  })
}

main().catch(console.error)