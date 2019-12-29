module.exports = (AppName, author) => `{
    "name": "${AppName}",
    "version": "1.0.0",
    "description": "${AppName}",
    "main": "server.js",
    "dependencies": {
      "express": "^4.16.2"
    },
    "devDependencies": {
      "babel-core": "6.25.0",
      "babel-eslint": "7.2.3",
      "babel-jest": "20.0.3",
      "babel-loader": "7.1.1",
      "babel-plugin-transform-react-jsx": "^6.24.1",
      "babel-preset-es2015": "^6.3.13",
      "babel-preset-react": "^6.3.13",
      "babel-preset-react-app": "^3.0.3",
      "babel-preset-stage-1": "^6.0.15",
      "babel-preset-stage-2": "^6.24.1",
      "babel-runtime": "6.26.0",
      "file-loader": "0.11.2",
      "react": "^15.5.4",
      "react-dom": "^15.5.4",
      "style-loader": "^0.23.1",
      "swirl-layout": "^0.0.7",
      "webpack": "3.5.1",
      "webpack-dev-server": "2.8.2",
      "webpack-merge": "^4.1.1"
    },
    "scripts": {
      "dev": "webpack-dev-server --config webpack/dev.config.js",
      "build": "webpack --config webpack/prod.config.js && npm run copy",
      "copy": "cp -r src/index.html dist && cp -r public dist",
      "start": "node server.js",
      "deploy": "./bin/deploy.sh"
    },
    "author": "${author}",
    "license": "ISC"
  }`