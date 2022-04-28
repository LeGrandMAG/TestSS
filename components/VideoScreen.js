import React from "react";
import { StatusBar } from "expo-status-bar";
import {View, Text, Button, StyleSheet} from 'react-native'
import {AVPlaybackStatus, Video } from 'expo-av'

const VideoScreen = ({navigation}) => {
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
                <Button style={styles.button} title="10초부터 프레이" onPress={() => video.current.playFromPositionAsync(10000)} />
                
                <Button style={styles.button} title={status.isLooping ? "로프 remove": "로프 설정"} onPress={()=> video.current.setIsLoopingAsync(!status.isLooping)}/>
                <Button style={styles.button} title="메모장으로" onPress={()=> navigation.navigate('Task2') }/>

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