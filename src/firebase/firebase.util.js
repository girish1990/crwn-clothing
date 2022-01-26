import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCwUztFwTNdXoS048kKIrzkT4qwxvryaDs",
    authDomain: "crwn-db-a058b.firebaseapp.com",
    projectId: "crwn-db-a058b",
    storageBucket: "crwn-db-a058b.appspot.com",
    messagingSenderId: "321939850876",
    appId: "1:321939850876:web:ca492bc56ba596f829abf9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`error creating user ${error.message}`);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;