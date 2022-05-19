import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import VideoScreen from './VideoScreen';
import { getDatabase, ref, onValue, set, orderByChild, query } from 'firebase/database';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*
const firebaseConfig = {
    apiKey: "AIzaSyBXzp-KymptToG34X7cHydYtP2m5GvfVeg",
    authDomain: "cubelab-fc0e2.firebaseapp.com",
    projectId: "cubelab-fc0e2",
    storageBucket: "cubelab-fc0e2.appspot.com",
    messagingSenderId: "613999755778",
    appId: "1:613999755778:web:4708fb302f633df1531d1b"
};*/




const Page = () => {
    return (
    <ScrollView style={styles.container}>
          <View style={styles.nav}>

              <Image 
                  source={require ('../components/menu.png')}
                  style={styles.img1}
                  />
                  <Image 
                  source={require ('../components/log-out.png')}
                  style={styles.img2}
                  />
          </View>
          <View>
          
          </View>
        </ScrollView>
    );
};

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
      display: 'flex',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth:1,
      margin: 10,
      marginTop: 20,
    },
    img1:{
    },
    img2:{
      marginTop: 10,
  
    },
  
  });
export default Page;