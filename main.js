const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
	const win = new BrowserWindow({ width: 1024, height: 768 });
	win.loadURL('devtools://devtools/bundled/js_app.html?ws=localhost:9229/SBqxI5YIqtREaDrXkFr8hLE0HL1AfKx8TjkI8qPMq2s');
})
