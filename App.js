import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Task2 from './Screens/Task2';
import Task from './Screens/Task';
import Login from './Screens/Login';
import * as eva from "@eva-design/eva"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
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
import { ApplicationProvider, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import VVideo from './Screens/Video';


const Stack = createNativeStackNavigator();



export default function App (){

  return(
    <ApplicationProvider>

    <Category/>
  </ApplicationProvider>




    
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
})


/*
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
*/