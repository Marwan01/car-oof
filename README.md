# car-oof

### Simple React Native app to store important car documents to a Firebase Database. Go paperless, dump your old traffic tickets, and empty your glovebox today, with the help of this app and the reliability of Google Firebase.

![demogif](/assets/demo.gif)

Try the app here: https://expo.io/@marwanest1/car-oof

## Getting Started

Follow these steps to get your own version of this project.

Prerequisites:
- npm ```brew install npm```
- yarn ```brew install yarn```
- Expo CLI ```npm install -g expo-cli```
- Firebase account https://firebase.google.com


Clone the Repo:

```sh
git clone https://github.com/Marwan01/car-oof.git
```

Update firebase config to use your own. In your Firebase console app settings, copy your config that is in the format: 

```sh 
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "xxxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxx.firebaseio.com",
  projectId: "xxxxxx",
  storageBucket: "xxxxxx.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};
```
and change it with the existing one in the ```Fire.js``` file.


Install dependencies:

```sh 
yarn
```

Run with:

```sh 
npm start 
```

Build with: 

```sh 
expo build
```

Credits:

Tutorial followed: https://blog.expo.io/instagram-clone-using-firebase-react-native-expo-cc32f61c7bba