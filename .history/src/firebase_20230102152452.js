import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA9AQ6GBecnDjzYQorOMotUQvkcZgmFqdE',
	authDomain: 'post-app-3203e.firebaseapp.com',
	projectId: 'post-app-3203e',
	storageBucket: 'post-app-3203e.appspot.com',
	messagingSenderId: '905467232334',
	appId: '1:905467232334:web:31883f07cf29e9dbcac31f',
	measurementId: 'G-YNJEF03DBC'
};

const app = initializeApp(firebaseConfig);
export default const auth = getAuth(app);
