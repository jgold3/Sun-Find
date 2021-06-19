<h1><img align="left" width="50" height="50" src="expo-client/assets/icon.png"/>Sun Find</h1>

SunFind is a native iOS application made using React-Native. It allows users to post pictures of sunsets and sunrises with the location of where the picture was taken. Other users can then naviagte to the location and view and rate the SunFinds associated with it.

## Developer Installation
1. [Install Expo CLI](https://docs.expo.io/get-started/installation/) and its dependencies, if you don't already have it installed.
	- Dependencies:
		- [Node.js](https://nodejs.org/en/)
		- [Git](https://git-scm.com/)
		- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS users
	- ```npm install -g expo-cli```
	- Recommended: Install yarn, if you don't already have it installed.
		- ```npm install -g yarn```

2. Download the Expo Go app for either iOS or Android.
	- Expo Go allows you to open up apps that are being served through Expo CLI.

3. Install Node Modules used in this project.
	- There are multiple package.jsons that need to be installed.
	- ```node install_modules.js```

4. Create a .env file to hold the environment variables used in the project.
	- Please contect the development team if you need your own copy of keys

5. Start a local express.js server that holds API endpoints for the backend. Do this in a sepperate terminal window.
	- ```cd backend```
	- ```npm run dev```

6. In another terminal window, start the Expo CLI.
	- ```cd expo-client```
	- ```expo start```
	- Scan the QR code that pops up.
	- This will buid the app through the Expo Go app that you installed earlier.

