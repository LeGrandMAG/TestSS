import React from "react";
import {View, Text, StyleSheet} from 'react-native'


const Task = () => {

    return (

        <View style={styles.post}>
            <View style={styles.titlecont}>
                <Text style = {styles.title}>This is a beautiful Task</Text>
                <View style={styles.buttoncont}>
                    <View style={styles.editbutton}>
                        <Text>추가</Text>
                    </View>
                    <View style={styles.delbutton}>
                        <Text>삭제</Text>
                    </View>
                </View>

            </View>
            <View style={styles.postcont}>
                <Text style={styles.descp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec pretium volutpat fermentum ut elementum. Eget amet nunc, ut facilisi cras quis integer vivamus. Habitant tellus interdum augue mattis feugiat nec, vel fermentum. Maecenas ullamcorper massa amet commodo ornare commodo odio vel.</Text>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    post:{
        margin: 10,
        borderRadius: 3,
        
    },
    titlecont:{
        
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        margin: 10,
        marginLeft:0,
        paddingLeft:0,
        alignContent: "center",
    },
    title:{
        marginLeft: 0,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#014D9C',
    },
    buttoncont:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        width: 100,
        marginLeft:50

    },
    editbutton:{
        backgroundColor: "rgba(1,77,156,0.1)",
        padding:8,
        borderRadius: 5

    },
    delbutton:{
        backgroundColor: "rgba(156,1,1,0.1)",
        padding:8,
        borderRadius: 5
    },
    postcont:{
        backgroundColor: '#FBFAFA',
        padding: 10,
        paddingTop: 5,
        paddingHorizontal:15,
        borderWidth: 1,
        borderColor: '#DADADA',
        borderRadius: 3,

    },
    descp:{
        textAlign: "justify"
    }
    
});

export default Task