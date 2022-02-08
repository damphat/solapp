const fs = require('fs');

fs.rmSync('build', {
    force: true,
    recursive: true
})