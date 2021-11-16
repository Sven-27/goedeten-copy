Om https te gebruiken:

installeer chocolatey (lees goed de installatie-instructies!) (https://chocolatey.org/)
al deze commando's in de terminal (choco install met admin-privileges!, de rest kan in een normale vscode powershell terminal):
installeer mkcert via chocolatey "choco install mkcert"
installeer root certificaat "mkcert -install"
installeer lokale SSL certificaten in deze map: (vanuit webapp=>) "cd https_cert" "mkcert localhost"
start server niet via "npm run dev" maar via "node server.js"