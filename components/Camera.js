import React, {useState,useEffect } from "react"
import { StyleSheet, TouchableOpacity,Text, View} from 'react-native';
import {Camera} from 'expo-camera';


export default function Cam(){

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [light, setLight] = useState(Camera.Constants.FlashMode.on)

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
        <View style = {{ flex: 1}}>
            <Camera
                ratio="16:9"
                style={styles.cam}
                type = {type}
                flashMode = {light}>
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
                            Flip Camera
                        </Text>

                    </TouchableOpacity>
                    
                </View>
            </Camera>
        </View>);
}
const styles = StyleSheet.create({
    cam:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    camButtonContainer:{
        position: 'absolute',
        bottom: 20,
        display:'flex',
        flexDirection: 'row',
        flex: 1,
        
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

