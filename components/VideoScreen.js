import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import Video from "react-native-video";

const VideoScreen = () => {

    return (

        <View style={styles.post}>
            <Video source={{uri: "file://C:\Users\maglo\OneDrive\Desktop\Xvv840f2-J4K7909.mp4"}}
            ref={(ref) => {
                this.player = ref
            }}
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={styles.backgroundVideo} />
        </View>

    )
}

// Later on in your styles..
const styles = StyleSheet.create({

    post: {
        position: 'absolute',
        top:0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});


export default VideoScreen;