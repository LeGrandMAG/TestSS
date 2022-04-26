import React from "react"
import { Image, Button, ScrollView, Text, View, TextInput } from 'react-native';


const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 80,
    height: 80,
    
  };

const Login = () => (
    <View
    style={{
        height: 690,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >
        <Image 
            source={logo}
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
                    borderColor: 'blue',
                    width:300,
                    height: 45,
                    marginBottom:20

                }}
                placeholder="사용자 이름"
            />
            <TextInput
                style={{
                    paddingVertical: 8,
                    paddingHorizontal:10,
                    textAlign:'center',
                    borderRadius: 8,
                    borderWidth:2,
                    height: 45,
                    borderColor: 'blue',
                    width:300,
                    marginBottom:20
                    
                }}
                placeholder="비밀번호"
            />
            <Text
                style={{
                    backgroundColor:'rgb(200,200,200)',
                    paddingHorizontal:40,
                    paddingVertical: 10,
                    height: 40,
                    marginBottom: 10,
                    borderRadius: 5,
                    textAlignVertical: 'center'
                }}
            >
                로그인
            </Text>
            <Text>
                Forgot Password?
            </Text>
        </View>
    </View>
)

export default Login