// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  //apiEndpoint: 'http://192.168.25.118:8000/',
  //imageURL: 'http://192.168.25.118:8000/media/',
  apiEndpoint: 'http://125.22.105.181:11113/',
  imageURL: 'http://125.22.105.181:11113/media/',
  firebase: {
    apiKey: "AIzaSyDzLbKnKie9jagNn9Up1_dzHGdeGD1Wo8E",
    authDomain: "ssilweb.firebaseapp.com",
    databaseURL: "https://ssilweb.firebaseio.com",
    projectId: "ssilweb",
    storageBucket: "ssilweb.appspot.com",
    messagingSenderId: "859643726626",
    appId: "1:859643726626:web:b0e99587b064fc07dc737b"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
