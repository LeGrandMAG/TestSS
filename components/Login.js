import React from "react"
import { Image, Button, ScrollView, StyleSheet, TouchableOpacity,Text, View, TextInput } from 'react-native';


const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 80,
    height: 80,
    
  };

const Login = ({navigation}) => (
    <View
    style={{
        height: 690,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }}
    >
        <Image 
            source={require('./cubelab.png')}
            style={{
                marginBottom:100,
            }}
            />
        <View
            style={{

                height: 50,
                margin: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <TextInput
                style={{
                    paddingVertical: 8,
                    paddingHorizontal:10,
                    textAlign:'center',
                    borderRadius: 8,
                    borderWidth:2,
                    borderColor: 'rgb(20,100,200)',
                    width:300,
                    height: 45,
                    marginBottom:20

                }}
                placeholder="사용자 이름"
            />
            <TextInput
                secureTextEntry={true}
                style={{
                    paddingVertical: 8,
                    paddingHorizontal:10,
                    textAlign:'center',
                    borderRadius: 8,
                    borderWidth:2,
                    height: 45,
                    borderColor: 'rgb(20,100,200)',
                    width:300,
                    marginBottom:20
                    
                }}
                
                placeholder="비밀번호"
            />
            <Text
            style={{
                backgroundColor:'rgb(20,100,200)',
                paddingHorizontal:40,
                paddingVertical: 10,
                height: 40,
                color: 'white',
                textAlign: 'center',
                marginBottom: 10,
                borderRadius: 5,
                textAlignVertical: 'center',
                width:200}} > 
                로그인
            </Text>
                
            <Text>
                Forgot Password?
            </Text>
            <TouchableOpacity
                    style = {styles.butto}
                    onPress = {() => navigation.navigate("Task2")}>
                    <Text style={styles.text}>메모에 가기</Text>
            </TouchableOpacity>
            
        </View>
    </View>
)
const styles = StyleSheet.create({
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

export default Login