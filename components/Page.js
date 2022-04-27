import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { initializeApp } from "firebase/app";
import VideoScreen from './VideoScreen';
import { getDatabase, ref, onValue, set, orderByChild, query } from 'firebase/database';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const firebaseConfig = {
    apiKey: "AIzaSyBXzp-KymptToG34X7cHydYtP2m5GvfVeg",
    authDomain: "cubelab-fc0e2.firebaseapp.com",
    projectId: "cubelab-fc0e2",
    storageBucket: "cubelab-fc0e2.appspot.com",
    messagingSenderId: "613999755778",
    appId: "1:613999755778:web:4708fb302f633df1531d1b"
};


const app = initializeApp(firebaseConfig);


const Page = () => {
    return
    <ScrollView style={styles.container}>
          <View style={styles.nav}>
            <View style={styles.navv}>
              <Image 
                  source={require ('./menu.png')}
                  style={styles.img1}
                  />
                  <Image 
                  source={require ('./log-out.png')}
                  style={styles.img2}
                  />
                  
            </View>
            
            <View style={styles.line}>
              
            </View>
          </View>
          <View>
          <VideoScreen/>
          </View>
        </ScrollView>
}


export default Page;