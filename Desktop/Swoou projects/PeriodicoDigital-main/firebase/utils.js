import { initializeApp } from 'firebase/app';
import { app } from './config'
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { getDatabase, ref, onValue, set, update, child, get, remove} from "firebase/database";
import { getList} from './storage'


const auth = getAuth();
const db = getDatabase(app);

function onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile(user)
    } else {
      setUserProfile(user)
    }
    getList(postsIMG, setUserPostsIMG)
    getData(setUserData)
  });
}

// ---------------------------Login, Sign Up and Sign In------------------------------------

function signUpWithEmail (email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

function signInWithEmail (email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

function handleSignOut () {
  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}

// -------------------------------Firebase Realtime Database------------------------------------

const dbRef = ref(getDatabase());

function getData(setUserData) {
  onValue(ref(db, '/'), (snapshot) => {
    if (snapshot.exists()) {
      setUserData(snapshot.val())
        } else {
          setUserData('');
        }
    
  });
}

function getSpecificData(query, setUserSpecificData) {
  get(child(dbRef, `users/${query}`)).then((snapshot) => {
    if (snapshot.exists()) {
      setUserSpecificData(snapshot.val()) 
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function writeUserData (direction, object, setUserSuccess) {
  update(ref(db, direction), object )
  .then(()=> setUserSuccess !== null? setUserSuccess('save'): '')
  .catch(()=>setUserSuccess('repeat'))
}

async function removeData (data, setUserData, setUserSuccess) {
  await remove(ref(db, 'users/' + data)).then(()=>setUserSuccess('save')).catch(()=>setUserSuccess('repeat'));
  getData(setUserData)

}
export {app, onAuth, signUpWithEmail, signInWithEmail, handleSignOut, getData, getSpecificData, writeUserData, removeData, }
