# Angular-Mobile
Mobile application using Cordova and Angular JS

# Steps to Install
1. Install [NodeJS](https://nodejs.org/en/download/).
2. Install [Gulp](http://gulpjs.com/), [tsd](https://www.npmjs.com/package/tsd), [bower](http://bower.io/), [http-server](https://www.npmjs.com/package/http-server), [lr-http-server](https://www.npmjs.com/package/lr-http-server)

  ` npm install -g gulp tsd bower http-server lr-http-server `
3. Download this repository and navigate into the root directory
4. Run the following commands to download dependencies

  ` npm install & bower install & tsd install `
5. Build the website using the gulp tasks

  `gulp`
6. Launch a webserver and serve the index page
  
  * Use `http-server` launch a webserver
  
  * Use `lr-http-server` launch a webserver with live-reloading enabled, which will automatically refresh the webpage if changed.
