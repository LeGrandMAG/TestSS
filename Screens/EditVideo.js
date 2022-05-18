import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity, Button } from 'react-native';
//import { Button } from '@ui-kitten/components';

import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Camera } from 'expo-camera';
//import Cam from './components/Camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { async } from '@firebase/util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native';


export default function EditVideo(){
    const [note, setNote] = useState("")
    const navigation = useNavigation()


    const saveNote = async () =>{
        const value = await AsyncStorage.getItem("NOTES")
        const n = value ? JSON.parse(value): []
        n.push(note)
        await AsyncStorage.setItem("NOTES", JSON.stringify(n)).then(() => navigation.navigate("AllNotes"))
        setNote("")
    }
  
  return(
    <SafeAreaView style={{flexDirection:'column', alignItems:'center',}} >
        <TextInput
            value={note}
            onChangeText={setNote}
            style={{ width: "95%", fontSize:22, color:'black'}}
            multiline={true}
            autoFocus
            selectionColor='black'
        />
        <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding": "height"} style={styles.Bottom}>
            <Button title="Edit Video" style={styles.button} /*appearance ="filled"*/ onPress={saveNote}>
                Edit Video
            </Button>
        </KeyboardAvoidingView>
        <TouchableOpacity 
            style={styles.AddVideo}
            onPress>
            <Text style={{ fontSize:30, fontWeight: '600'}}>
                Click here to add video
            </Text>
        </TouchableOpacity>
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