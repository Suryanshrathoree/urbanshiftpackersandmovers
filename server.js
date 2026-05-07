const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT     = 3000;
const LOG_FILE = path.join(__dirname, 'enquiries.txt');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

function timestamp() {
  return new Date().toLocaleString('en-IN', { hour12: false });
}

function handleSubmit(req, res) {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      const { name, mobile, email, shifting_type, from, to } = data;

      if (!name || !mobile || !email || !from || !to) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Please fill all required fields' }));
        return;
      }

      const line = `[${timestamp()}] Name: ${name} | Mobile: ${mobile} | Email: ${email} | Type: ${shifting_type || 'N/A'} | From: ${from} | To: ${to}\n`;
      fs.appendFile(LOG_FILE, line, err => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Failed to save enquiry' }));
          return;
        }
        console.log('Enquiry saved:', line.trim());
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      });
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Invalid request' }));
    }
  });
}

function serveFile(req, res) {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    handleSubmit(req, res);
  } else {
    serveFile(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
