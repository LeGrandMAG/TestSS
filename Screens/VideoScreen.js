import React from "react";
import { StatusBar } from "expo-status-bar";
import {View, Text, TouchableOpacity, Button, StyleSheet, Touchable, Scro} from 'react-native'
import {AVPlaybackStatus, Video } from 'expo-av'
import { Dimensions } from "react-native";

const VideoScreen = (props, {navigation}, ) => {
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (

        <View style={styles.videoContainer}>
            <View>
                <View style={{
                    paddingTop: 20,
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:'center',
                    width: "50%",
                    }}>
                    <Text>
                        Category 1
                    </Text>
                    <Button title="수정" color='blue' onPress={() => del} />
                </View>
            </View>
            <Video 
            ref={video}  
            style ={styles.video}
            
            source={require('../components/Xvv840f2-J4K7909.mp4')}
            resizeMode="contain"
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={setStatus}
            />
            <View style={styles.xx}>
                            <TouchableOpacity
                            style = {styles.butto}
                            onPress = {() => navigation.navigate("Cam")}>
                                <Text style={{color:"white", fontSize: 20, fontWeight: 'bold'}}>AR 동영상</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            style = {styles.butto}
                            onPress = {() => navigation.navigate("Vid")}>
                                <Text style={{color:"white", fontSize: 20, fontWeight: 'bold'}}>VR 동영상</Text>
                            </TouchableOpacity>
                        </View>
            
        </View>

    )
}

// Later on in your styles..
const styles = StyleSheet.create({

    videoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    x:{
        margin: 20,
        backgroundColor: 'red'
    },
    butto:{
        alignItems:'center',
        backgroundColor:'rgb(20,100,200)',
        padding:20,
        width: 200,
        marginVertical: 10,
        color:"white",
    },
    buttonContainer:{
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignContent: 'space-between',
        height: 150,
    },
    button:{
        marginBottom: 10
    },
    video:{
        width: 400,
        height: 500,
      },
    
});


export default VideoScreen;