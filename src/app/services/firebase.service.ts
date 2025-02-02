import { Injectable } from "@angular/core";
import * as firebase from "firebase"; // Import Firebase (no need to specify 'app' here)

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2PENukW8GGUaPxeLzCDmfQmghQHb25s",
  authDomain: "un-buddy-first-aid-app.firebaseapp.com",
  projectId: "un-buddy-first-aid-app",
  storageBucket: "un-buddy-first-aid-app.firebasestorage.app",
  messagingSenderId: "602394028696",
  appId: "1:602394028696:web:f1415d3e3790fedcd0beed",
  measurementId: "G-LCC33SDM7V",
};

@Injectable()
export class FirebaseService {
  constructor() {
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // If already initialized, use the existing app
    }
  }

  // Get Firestore reference
  getFirestore() {
    return firebase.firestore();
  }

  // Add data to Firestore
  // addData(collection: string, data: any) {
  //   return firebase.firestore().collection(collection).add(data);
  // }

  async addOrUpdateData(collection: string, deviceId: string, data: any) {
    try {
      const firestore = this.getFirestore();
      const querySnapshot = await firestore
        .collection(collection)
        .where("deviceId", "==", deviceId)
        .get();

      if (!querySnapshot.empty) {
        // If a document with the same deviceId exists, update it
        const docRef = querySnapshot.docs[0].ref;
        await docRef.update(data);
        console.log("Document updated successfully:", docRef.id);
      } else {
        // If no document with the same deviceId exists, create a new one
        const docRef = await firestore.collection(collection).add({
          deviceId,
          ...data,
        });
        console.log("New document created with ID:", docRef.id);
      }
    } catch (error) {
      console.error("Error adding or updating document:", error);
    }
  }
}
