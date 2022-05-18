import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, KeyboardAvoidingView, Platform, Dimensions, BUtton, TouchableOpacity, FlatList } from 'react-native';
import {ListItem, Divider, List} from '@ui-kitten/components'

import { NavigationContainer, StackActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Camera } from 'expo-camera';
//import Cam from './components/Camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { async } from '@firebase/util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native';


export default function Video({route}){

    const [notes, setNotes] = useState([])
    const {singleNote} = route.params
    const navigation = useNavigation()
    useFocusEffect(
        React.useCallback(() =>{
            getNotes()
        },  [])
    )


    const getNotes = () =>{
        AsyncStorage.getItem("NOTES").then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }

    const deleteNote = async () => {
        const newNotes = await notes.filter((note) => note !== singleNote)
        await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes))
        .then(() => navigation.navigate("AllNotes"))
    }
  
  return(
    <SafeAreaView style={{flexDirection:'column', alignItems:'center',}} >
        <Text
        style={styles.title} category="h1">
            Notes
        </Text>
        <Text
        style={{fontSize:22, margin:20}}>
            {singleNote}
        </Text>
        <View style={styles.bottom}>
            <Button title="Delete" onPress = {deleteNote} style={styles.button}></Button>
        </View>
    </SafeAreaView>




    
  );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        width: Dimensions.get("window").width
    },
    AddVideo:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20,
        borderWidth: 2,
        width: Dimensions.get('window').width,
        height: 500
        
    }
})