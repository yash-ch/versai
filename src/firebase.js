
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React, {Component} from 'react';
import {collection, getDocs, getFirestore, doc, query, where} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxadmDFOdwr686ZOpJT69sEeRO9Tnlsbk",
    authDomain: "enactus-books.firebaseapp.com",
    projectId: "enactus-books",
    storageBucket: "enactus-books.appspot.com",
    messagingSenderId: "91841483756",
    appId: "1:91841483756:web:426973e3e2a0654d87a6c9",
    measurementId: "G-RWB21EE26D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class FirestoreData extends Component {

    getCategories = async () => {
        let categoryList = [];
        let newCategoryList = [];
        let collectionRef = collection(db, "category")
        const docSnapShot = await getDocs(collectionRef);
        // eslint-disable-next-line array-callback-return
        docSnapShot.docs.map((category) => {
            let name= category.data()["name"]
            let index = category.data()["index"]
            newCategoryList.push({name : name, index : index});
            categoryList.push(name);
            }
        )
        console.log(newCategoryList.sort());
        return categoryList
    }

}

