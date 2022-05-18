import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, KeyboardAvoidingView, Platform, Button, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { ApplicationProvider, ListItem, Divider, List} from '@ui-kitten/components'

import { NavigationContainer, StackActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Camera } from 'expo-camera';
//import Cam from './components/Camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { async } from '@firebase/util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native';


export default function Category(){
    const [notes, setNotes] = useState([])
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

    const renderItem = ({ item, index}) => (
        <ListItem
            title= {<Text category ="h5"> {item}</Text>}
            onPress={() => navigation.navigate("Note",{
                singleNote: item
            })}
            
        />
    )
  
  return(
    <SafeAreaView style={{flexDirection:'column', alignItems:'center',}} >
        <List
            style={styles.container}
            data={notes.reverse}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
        />
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