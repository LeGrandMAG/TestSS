import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity,} from 'react-native';
import { Button } from '@ui-kitten/components';

import { useNavigation } from '@react-navigation/native';
//import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Video from './Video';
import firestore from '@react-native-firebase/firestore';

/*
export default function EditVideo({navigation, route}){
    const [note,setNote] = useState("")
    const [link, setLink] = useState("")
    const [image, setImage] = useState(null);
    //const navigation = useNavigation()

    let id = route.params?.id

    const saveNote = async (result) =>{
        const value1 = await AsyncStorage.getItem("NOTES")
        const n = {}
        n['note'] = value1 ? JSON.parse(value1) : []
        n['note'].push(note)
        await AsyncStorage.setItem("NOTES", JSON.stringify(n)).then(() => navigation.navigate("Category"))
        setNote("")
        if (result){
            const value2 = await AsyncStorage.getItem("LINKS")
            n['link'] = value2 ? JSON.parse(value2) : [];
            n['link'].push(link)
            await AsyncStorage.setItem("LINKS", JSON.stringify(m)).then(() => navigation.navigate('Category'))
            setLink("")
        }
        else{

            const value3 = await AsyncStorage.getItem("VIDEOS")
            console.log(image)
            n['link'].push(result.uri)
        } 
    }
    /*const saveLink = async () =>{
        
    }

    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');})();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
          setImage(result.uri);
        }
    };if (hasGalleryPermission === false) {
        return <Text>No access to Gallery</Text>;
    }

  return(
    <SafeAreaView style={styles.container} >
        <TextInput
            value={note}
            onChangeText={(note) => setNote(note)}
            style={{ width: "95%", fontSize:22, color:'black'}}
            multiline={true}
            autoFocus
            selectionColor='black'
            placeholder='Put your text here'
        />
        <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding": "height"} style={styles.Bottom}>
            
        </KeyboardAvoidingView>
        <View style={{ justifyContent:'center', alignItems:'center'}}>
        <View>
        <Text style={{marginTop:10,textAlign:'center'}}>Or</Text>

            <TextInput
                value = {link}
                onChangeText = {(link) =>setLink(link)} 
                style={{ width: 300, fontSize:22, color:'black', marginTop: 20, justifyContent:'center', alignItems:'center', paddingHorizontal:5,
        borderWidth: 2, height: 100}}
                multiline={true}
                autoFocus
                selectionColor='black'
                placeholder="Enter the link here">
            </TextInput>
            <View>
                <Video
                source={{uri:image}}
                />
                <TouchableOpacity 
                style={styles.AddVideo}
                onPress ={pickImage}>
                    <Text style={{ fontSize:20, fontWeight: '600'}}>
                        Add video from file
                    </Text>
                </TouchableOpacity>
            </View>

            <Button style={styles.button} appearance ="filled" onPress={saveNote}>
                Add Link
            </Button>
        </View>
        <View>
        </View>
        </View>
    </SafeAreaView>




    
  );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'white',
        width: Dimensions.get("window").width,
        height: Dimensions.get('window').height
    },
    AddVideo:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20,
        borderWidth: 2,
        width: 300,
        height: 100
        
    },
    button:{
        marginTop:20
    }
})*/