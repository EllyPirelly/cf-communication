# Communication App

### What is this about?
A very simple Communication App for mobile devices (phones) using React Native.
<br>
The App will provide users with the possibility give access and then access their media library (to access photos), give access and then access their device's camera (to take a photo), give access and then access their geo location data (to display it as a map).
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
- must be written in React Native
- must be developed using Expo (Expo CLI and Expo Go App) and Android Studio
- must use Expo Image Picker
- might use Expo Media Library
- must use Expo Location
- must use React Native Maps
- must only use `App.js`
- must not have styling

### Feature requirements
User
- must be asked to give access to their device's media library
- after giving access, is able to access images of their device's media library
- must be asked to give access to their device's camera
- after giving access, is able to take a picture, which will automatically (per default) be saved to the device's gallery
- must be asked to give access to their geo location
- after giving access, is able to access their geo location data and share it via displaying it as a map

### Languages, Libraries, Frameworks, Tools
- React Native
- [Expo](https://expo.dev/)
  - [Expo CLI](https://docs.expo.dev/get-started/installation/) and Expo Go App
  - [Watchman](https://docs.expo.dev/get-started/installation/#requirements)
- [Android Studio](https://developer.android.com/studio) to - when as in my case developing on MAC - emulate Android devices
- Google Firestore/Firebase

### Heads-up
- at time of writing to use Expo CLI you need to downgrade Node to `16.19.0`

### Global
- `expo-CLI` - to create new projects and start running Expo

### Dependencies
- `expo` - to set up, develop and test React Native Apps
- `expo-image-picker` - to ask permission and access photos/media library, take photos
- `expo-media-libary` - to ask permission and by default save photos captured using the device's camera into the device's gallery
- `expo-location` - to ask permission and retrieve users geo location data
- `react`
- `react-native` - to build apps for Android and iOS quickly with one codebase
- `react-native-maps` - to display the retrieved geo location data in MapView

### Dev Dependencies
- `babel`

### How to run this? - ToDo
With Expo installed
- `npm start` or `expo start`