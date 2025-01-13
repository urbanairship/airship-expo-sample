# Airship Expo Sample

A basic sample application that integrates the Airship React Native module and the Airship Expo Plugin.

## Setup

From the project root run `yarn install` to install the dependencies.

## Call TakeOff

`takeOff` should be called at the beginning of the lifecycle.

```javascript
import Airship from '@ua/react-native-airship';

Airship.takeOff({
    default: {
        appKey: "REPLACE_WITH_YOUR_APP_KEY",
        appSecret: "REPLACE_WITH_YOUR_APP_SECRET",
        logLevel: "verbose"
    },
    site: "us", // use "eu" for EU cloud projects
    urlAllowList: ["*"],
    android: {
        notificationConfig: {
            icon: "ic_notification",
            accentColor: "#00ff00"
        }
    }
});
```

## FCM

If using FCM, add your `google-services.json` file in `assets`.
Then configure your `googleServicesFile` in your `app.json` file.

```json
   {
      "expo": {
         "android": {
            "googleServicesFile": "./assets/google-services.json"
         }
      }
   }
```

## Prebuild

Generates native Android and iOS directories using `npx expo prebuild`.
Then start the webserver by running `npx expo start -c`.

### Android

1) Build and run the android platform using: `npx expo run:android`.

   Note: 
      You may also need to set up port forwarding for your android device:
         - List devices: `adb devices`
         - Set up port forwarding for device: `adb -s <REPLACE_WITH_YOUR_DEVICE_ID> reverse tcp:8081 tcp:8081`

### iOS

1) Run `npx pod-install` to install the pods.

2) Build and run the iOS platform using: `npx expo run:ios`.