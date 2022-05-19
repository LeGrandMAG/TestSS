import React, { useState } from 'react';
import { StyleSheet,  Dimensions } from 'react-native';
import { ListItem, Divider, List, Text} from '@ui-kitten/components'
import { View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native';
import { WhiteBalance } from 'expo-camera/build/Camera.types';


export default function Category(){
    const [notes, setNotes] = useState([])
    const [links, setLinks] = useState([])
    const navigation = useNavigation()
    useFocusEffect(
        React.useCallback(() =>{
            getNotes()
            getLinks()
        },  [])
    )


    const getNotes = () =>{
        AsyncStorage.getItem("NOTES").then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }

    const getLinks = () =>{
        AsyncStorage.getItem("LINKS").then((links) =>{
            setLinks(JSON.parse(links))
        })
    }

    const renderItem = ({ item, index}) => (
        <ListItem
            title= {<Text category ="h5"> {item}</Text>}
            onPress={() => navigation.navigate("VVideo",{
                singleNote: item
            })}
        />
        )

    const renderLink = ({ li, index}) => (
        <ListItem
        title= {<Text category="h6">{li}</Text> }
        />
    )
  
  return(
    <SafeAreaView style={{flexDirection:'column', alignItems:'center',}} >
        <Text style={styles.title} category="h1">
            Notes
        </Text>
        
    </SafeAreaView>




    
  );
}
const styles = StyleSheet.create({
	container: {
		fontSize: 20,
        width: Dimensions.get("window").width,
        backgroundColor: 'white'
	},

	item: {
		marginVertical: 4,
        backgroundColor: 'white'
	},
	title: {
		textAlign: "center",
		marginTop: 50,
        color: 'black'
	},
	notes: {
		fontSize: 24
	}
})

/*
<List
            style={styles.container}
            data={notes.reverse()}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
        />
*/