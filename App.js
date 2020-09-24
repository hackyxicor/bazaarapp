import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD38LX4wiOGdoQguaeV1HF4YwGkGMD5QsQ",
  authDomain: "bazaarindia-4e6a4.firebaseapp.com",
  databaseURL: "https://bazaarindia-4e6a4.firebaseio.com",
  projectId: "bazaarindia-4e6a4",
  storageBucket: "bazaarindia-4e6a4.appspot.com",
  messagingSenderId: "584452789710",
  appId: "1:584452789710:web:e8c4108b633d0d0bde479f",
  measurementId: "G-BNV0PE117F"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  firebase.firestore().collection("users").doc("useeerr_1").set({
    name: "usee"
  }).then((r) => {
    console.log(r);
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
