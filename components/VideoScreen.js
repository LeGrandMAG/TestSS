import React from "react";
import { StatusBar } from "expo-status-bar";
import {View, Text, Button, StyleSheet} from 'react-native'
import {AVPlaybackStatus, Video } from 'expo-av'

const VideoScreen = () => {
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
    return (

        <View style={styles.post}>
            <Video 
            style ={styles.video}
            ref={video}  
            source={{ url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={setStatus}
            />
            <View style={styles.Button}>
                <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
                <Button title={status.isLooping ? "Set to not loop": "Set t loop"} onPress={()=> video.current.setIsLoopingAsync(!status.isLooping)}/>

            </View>
        </View>

    )
}

// Later on in your styles..
const styles = StyleSheet.create({
    video:{
        width:100,
        height: 100,
        borderColor: 'red'
      },
    
});


export default VideoScreen;