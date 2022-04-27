import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Task2 from './components/Task2';
import Task from './components/Task';
import Login from './components/Login';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, orderByChild, query } from 'firebase/database';
import VideoScreen from './components/VideoScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './components/Page';


const firebaseConfig = {
    apiKey: "AIzaSyBXzp-KymptToG34X7cHydYtP2m5GvfVeg",
    authDomain: "cubelab-fc0e2.firebaseapp.com",
    projectId: "cubelab-fc0e2",
    storageBucket: "cubelab-fc0e2.appspot.com",
    messagingSenderId: "613999755778",
    appId: "1:613999755778:web:4708fb302f633df1531d1b"
};

const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

const MyStack =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component = {Login}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen 
          name = 'Profile'
          component= {Page}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
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
  line:{
    marginTop: 0,
    borderBottomWidth:1,
    height: 1,
    borderColor: 'black'
  },
  
  nav:{
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    
  },
  img1:{
  },
  img2:{
    marginTop: 10,

  },
  navv:{
    display: 'flex',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    margin: 10,
    marginTop: 20,
    
  }
});


export default MyStack;