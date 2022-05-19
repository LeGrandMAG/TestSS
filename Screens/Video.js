import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {ListItem, Divider, List} from '@ui-kitten/components'
import { Button, Text } from '@ui-kitten/components';
import { NavigationContainer, StackActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Camera } from 'expo-camera';
//import Cam from './components/Camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

/*

export default function VVideo({route, navigation}){

    const [notes, setNotes] = useState([])
    const {singleNote, singleLink} = route.params.VideoData
    //const navigation = useNavigation()
    
    useFocusEffect(
        React.useCallback(() =>{
            getNotes()
        },  [])
    )


    const getNotes = () => {
        AsyncStorage.getItem("NOTES").then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }

    const deleteNote = async () => {
        const newNotes = await notes.filter((note) => note !==singleNote )
        await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes)).then(() => navigation.navigate("Category"))
    }
  
  return(

    <SafeAreaView style={{flexDirection:'column', alignItems:'center'}} >
        <Text
        style={styles.title} category="h1">
            Notes
        </Text>
        <Text
        style={{fontSize:22, margin:20, color:'black'}}>
            {singleNote}
        </Text>
        <Video 
        style={{borderWidth:2, width:500, height: 600}}
            source={{uri: singleLink}}
            resizeMode="contain"
            
            useNativeControls
            isLooping
        />

        
        <View style={styles.bottom}>
            <Button onPress = {deleteNote} style={styles.button}>Delete</Button>
        </View>
    </SafeAreaView>




    
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
        color:"black"
	},
	item: {
		marginVertical: 4
	},
	title: {
		textAlign: "center",
		marginTop: 50,
        color:"black"
	},
	notes: {
		fontSize: 24,
        color:"black"
	}
})*/