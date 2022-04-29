import React, {useState,useEffect} from "react"
import { Image, Button, ScrollView, StyleSheet, TouchableOpacity,Text, View, TextInput } from 'react-native';
import {Camera} from 'expo-camera';
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 80,
    height: 80,
    
  };

const Cam = ({navigation}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return( 
        <Camera
            
                    style={styles.cam}>
                    <View
                    style={styles.camButtonContainer}>
                        
                    
                        <TouchableOpacity
                            style={styles.camButton}
                            onPress = {() => {
                                setType(
                                    type === Camera.Constants.Type.back

                                    ?Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Text
                                style={styles.camText}>
                                Camera
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.camButton}
                            onPress = {() => {
                                setType(
                                    type === Camera.Constants.FlashMode.on 
                                    ? Camera.Constants.FlashMode.off : Camera.Constants.FlashMode.on
                                );
                            }}>
                            <Text
                                style={styles.camText}>
                                Flash
                            </Text>

                        </TouchableOpacity>
                    </View>
        </Camera>);
}
const styles = StyleSheet.create({
    cam:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    camButtonContainer:{
        position: 'absolute',
        bottom: 20,
        display:'flex',
        flexDirection: 'row'
    },
    camButton:{
        margin: 10,
        backgroundColor: 'white',
        color: 'black',
        width: 100,
        height: 50,
        borderRadius: 3,
        justifyContent:'center',
        alignItems: 'center'


    },
    camText:{
        color: 'black',
    },
    butto:{
        alignItems:'center',
        backgroundColor:'rgb(20,100,200)',
        padding:2,
        height:50,
        justifyContent:'center',
        width: 200,
        marginVertical: 10,
        color:"white",
        borderRadius: 10,
    },
    text:{
        color: 'white'
    }
});

export default Cam