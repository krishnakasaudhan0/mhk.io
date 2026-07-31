const fs = require('fs');
const path = require('path');

// Read source index.html
const htmlPath = path.join(__dirname, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Base64 encode the HTML and wrap in a self-executing encrypted loader
const encoded = Buffer.from(html).toString('base64');

const obfuscatedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Happy Birthday Mahak 💖</title>
<script>
// Disable Right Click & Inspect Shortcuts
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || (e.ctrlKey && e.keyCode === 85) || (e.metaKey && e.altKey && e.keyCode === 85)) {
    e.preventDefault(); return false;
  }
});
</script>
</head>
<body>
<script>
(function(){
  var _0x4f2a="${encoded}";
  var _0x1b3c=decodeURIComponent(escape(atob(_0x4f2a)));
  document.open();
  document.write(_0x1b3c);
  document.close();
})();
</script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.protected.html'), obfuscatedHtml);
console.log('✅ Generated index.protected.html with scrambled code protection!');
