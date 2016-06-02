import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAVVbjsAbZsfPEIj-sIsBxQlbV4UUmEctc",
    authDomain: "patrick-todo-app.firebaseapp.com",
    databaseURL: "https://patrick-todo-app.firebaseio.com",
    storageBucket: "patrick-todo-app.appspot.com",
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name:'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Patrick Poh',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo1'
});

todosRef.push({
  text: 'todo2'
});
