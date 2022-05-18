import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Task2 from './Screens/Task2';
import Task from './Screens/Task';
import Login from './Screens/Login';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, orderByChild, query } from 'firebase/database';
import VideoScreen from './Screens/VideoScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './Screens/Page';
import { Camera } from 'expo-camera';
import Cam from './Screens/Camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import EditVideo from './Screens/EditVideo';
import Category from './Screens/Category';


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
        name = "Category List"
        component={Category}
        options={{
          //headerShown:false,
          title: "Category List"

        }}/>
        

      </Stack.Navigator>
    </NavigationContainer>
    /*<NavigationContainer>
    <Stack.Navigator>
      

      
      <Stack.Screen 
        name  = "로그인" 
        component={Login}
        options = {{
          headerShown:false,
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
          title: 'WEPO',
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
  </NavigationContainer> */




    
  );
}

export default MyStack;