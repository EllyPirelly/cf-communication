# Communication App

### What is this about?
A very simple Communication App for mobile devices (phones) using React Native.
<br>
The App will provide users with the possibility to:
- give access/then access their media library (to access photos)
- give access/then access their device's camera (to take a photo)
- give access/then access their geo location data (to display as a map)
<br>

This Communication App has been built as a small exercise for Achievement 5 in [Career Foundry's Full-Stack Web Development Program](https://careerfoundry.com/en/courses/become-a-web-developer/). It was the preparation before adding more or less the same features to the [Chat App](https://github.com/EllyPirelly/cf-chat-app).

### Access Media Library
![Screenshot access photos](/assets/screenshots/screenshot-01-access-photos-small.png)
### Take a photo
![Screenshot take photo](/assets/screenshots/screenshot-02-take-photo-small.png)
### Access geo location
![Screenshot geo location](/assets/screenshots/screenshot-03-geo-location-small.png)

### Technical requirements
The Shoppinglist App
- must be written in [React Native](https://github.com/facebook/react-native)
- must be developed using [Expo (Expo CLI and the Expo Go App)](https://expo.dev/) and [Android Studio](https://developer.android.com/studio)
- might use Expo Media Library
- must use [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) to
  - ask the user for permission to access device's image library
  - have the user select an image off of device's image library
  - ask the user for persmission to access device's camera
  - have the user take a photo with device's camera
- must use [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) to
  - ask the user for permission to access their geo location
  - app must read user's geo location data
- must use [MapView component](https://github.com/react-native-maps/react-native-maps) to display geo location as a map
- must only use `App.js`
- must not have styling

### Feature requirements
- only one screen
- a user
  - is able to pick an image from the device's media library
  - is able to take a photo with device's camera
  - is able to access their geo location and display it via a map

### Languages, Libraries, Frameworks, Tools
- [React Native](https://github.com/facebook/react-native)
  - JSX
  - JavaScript
- [Expo](https://expo.dev/)
  - [Expo CLI](https://docs.expo.dev/get-started/installation/) and Expo Go App
  - [Watchman](https://docs.expo.dev/get-started/installation/#requirements)
- [Android Studio](https://developer.android.com/studio)
- [Google Firebase](https://firebase.google.com/)
- [Expo ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [MapView component](https://github.com/react-native-maps/react-native-maps)

### Heads-up
At time of writing to use Expo CLI you need to downgrade Node to `16.19.0` <br>
Eventhough [Expo's site is a bit misleading regarding LTS](https://docs.expo.dev/get-started/installation/) if you try latest you will run into an error. <br>
[Also see here.](https://github.com/expo/expo/issues/21026)

### Global
- `expo-CLI` - to create new projects and start running Expo

### Dependencies
- `expo` - to set up, develop and test React Native Apps
- `expo-image-picker` - to request access to image library/camera
- `expo-media-libary` - to request access and by default save photos captured using the device's camera into the device's gallery
- `expo-location` - to request access to geo location
- `react`
- `react-native` - to build apps for Android and iOS quickly with one codebase
- `react-native-maps` - to use MapView component for geo location display

### Dev Dependencies
- `babel`

## How to run this?
- as this has been built with Expo, you best have an Expo account and download Expo Go on your mobile device
- it's also beneficial to set up an emulated device via Android Studio
- before cloning check your current Node version and downgrade to `16.19.0`
- after that
  - clone the repo
  - `cd` into project
  - `npm install`
- `expo login` will log you in via terminal
- `expo whoami` will check the currently logged-in account
- `npm start` or `expo start` will start the project (the Metro Bundler)
![Screenshot of Metro Bundler](/assets/screenshots//screenshot-metro-bundler.png)
- on MAC, you do NOT need the "full" XCode version to start the Android or iOS simulator and can hit `n`
- then open your iPhone
- open the Expo Go App
- open the project, this will start the building of files
- `control c` to stop the project from running
- `expo start --offline` to test the app offline