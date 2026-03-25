const https = require('https');

https.get('https://dentech-067cf4.webflow.io/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const lines = data.split('\n');
    const idx = lines.findIndex(l => l.toLowerCase().includes('why choose us'));
    if (idx !== -1) {
      console.log(lines.slice(Math.max(0, idx - 10), idx + 50).join('\n'));
    } else {
      console.log('Not found');
    }
  });
});
