# react-chat

Usage:
Required:
- npm install
- npm install webpack-dev-server -g

Basic:
- webpack -wd
- open index.html directly in browser

Webpack dev server (supports auto-reload):
- webpack-dev-server --progress --colors
- goto http://localhost:8080/webpack-dev-server/

React hot reloader (recommended):
- npm start
- goto http://localhost:3000

Additional info regarding hot module replacement: http://gaearon.github.io/react-hot-loader/getstarted/

Firebase setup:
- Goto https://www.firebase.com and create a new account or login to an existing one.
- Once logged in, create a new app and ensure the write rule is set to true (see security and rules section).
- Import data from the data/messages.json file.
- Finally use the firebase url (similar to https://xxx.firebaseio.com/) from your newly created app in the firebaseRefFactory class.
