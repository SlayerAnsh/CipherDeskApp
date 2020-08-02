const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'Cipher',
		webPreferences: {
            nodeIntegration: true
        }
	});
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'home.html'),
		protocol:'file:',
		slashes: true
	}));
	mainWindow.webContents.openDevTools();
	//quit app when closed
	mainWindow.on('closed', function(){
		app.quit();
	});
	//build from template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	//insert template
	Menu.setApplicationMenu(mainMenu);
});


//menu template
const mainMenuTemplate = []

