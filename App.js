import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task2 from './components/Task2';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, orderByChild, query } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBXzp-KymptToG34X7cHydYtP2m5GvfVeg",
    authDomain: "cubelab-fc0e2.firebaseapp.com",
    projectId: "cubelab-fc0e2",
    storageBucket: "cubelab-fc0e2.appspot.com",
    messagingSenderId: "613999755778",
    appId: "1:613999755778:web:4708fb302f633df1531d1b"
};

const app = initializeApp(firebaseConfig);

export default function App() {
  return (

    
    <ScrollView style={styles.container}>
      <View>
      </View>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
            Hyundai / KIA / Chevrolet
        </Text>
        <View style={{
          borderBottomColor: "#CAD1DA", 
          borderBottomWidth: 1 }}>

        </View>
        <View style={styles.items}>
          {/* This is were we will hold all the style */}
            <Task2/>
        </View>

        

      </View>
    </ScrollView>
  );
}
//StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    

  },
  sectionTitle: {
    color: "black",
    fontSize: 30,
    paddingBottom:8,
    fontWeight: 'bold',
  },
  items: {},


});
