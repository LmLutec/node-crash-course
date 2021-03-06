const os = require('os');

// Get platform(windows, mac)
console.log(os.platform());

// Get CPU architecture
console.log(os.arch());

// Get CPU core info
console.log(os.cpus());

// Get info about free memory
console.log(os.freemem());

// Get total memory
console.log(os.totalmem());

// Get Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
