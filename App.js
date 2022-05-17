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
import { Camera } from 'expo-camera';
import Cam from './components/Camera';

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
  return(
    <NavigationContainer>
    <Stack.Navigator>
      

      
      <Stack.Screen 
        name  = "로그인" 
        component={Login}
        options = {{
          title: 'LOGIN',
          headerStyle:{
            backgroundColor: 'black', },
          headerTintColor: 'white',
          headerTitleAlign: 'center'

        }}/>
        <Stack.Screen 
        name  = "Task2" 
        component={Task2}
        options = {{
          title: 'CATEGORY',
          headerStyle:{
            backgroundColor: 'black', },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
          }}/>
        <Stack.Screen 
        name  = "Task" 
        component={Task}
        options = {{title: 'Task'}}/>
        <Stack.Screen 
        name  = "Vid" 
        component={VideoScreen}
        options = {{title: 'Video'}}/>
        <Stack.Screen 
        name  = "Cam" 
        component={Cam}
        options = {{title: 'Camera'}}/>
      
      
    </Stack.Navigator>
  </NavigationContainer>




    
  );
}

export default MyStack;
