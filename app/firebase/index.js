import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyAVVbjsAbZsfPEIj-sIsBxQlbV4UUmEctc",
      authDomain: "patrick-todo-app.firebaseapp.com",
      databaseURL: "https://patrick-todo-app.firebaseio.com",
      storageBucket: "patrick-todo-app.appspot.com",
    };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
