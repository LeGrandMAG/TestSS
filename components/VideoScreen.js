import React from "react";
import { StatusBar } from "expo-status-bar";
import {View, Text, Button, StyleSheet} from 'react-native'
import {AVPlaybackStatus, Video } from 'expo-av'

const VideoScreen = () => {
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (

        <View style={styles.videoContainer}>
            <Video 
            ref={video}  
            style ={styles.video}
            
            source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
            resizeMode="contain"
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={setStatus}
            />
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
                <Button style={styles.button} title={status.isLooping ? "Set to not loop": "Set t loop"} onPress={()=> video.current.setIsLoopingAsync(!status.isLooping)}/>

            </View>
            
        </View>

    )
}

// Later on in your styles..
const styles = StyleSheet.create({

    videoContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    x:{
        margin: 20,
        backgroundColor: 'red'
    },

    buttonContainer:{
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignContent: 'space-between'
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