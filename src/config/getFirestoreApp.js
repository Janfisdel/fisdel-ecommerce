import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACR0idiCruEqRWxIsBwrY2HRwfNldlJfk",
  authDomain: "al--aire----ecommerce.firebaseapp.com",
  projectId: "al--aire----ecommerce",
  storageBucket: "al--aire----ecommerce.appspot.com",
  messagingSenderId: "697818393299",
  appId: "1:697818393299:web:e1a33ccaf3fccb0cc60226"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}
