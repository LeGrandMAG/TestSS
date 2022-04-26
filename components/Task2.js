import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { TextInput, SafeAreaView, Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { initializeApp } from "firebase/app";

import { getDatabase, ref, onValue, set, orderByChild, query } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBXzp-KymptToG34X7cHydYtP2m5GvfVeg",
    authDomain: "cubelab-fc0e2.firebaseapp.com",
    projectId: "cubelab-fc0e2",
    storageBucket: "cubelab-fc0e2.appspot.com",
    messagingSenderId: "613999755778",
    appId: "1:613999755778:web:4708fb302f633df1531d1b"
};

const app = initializeApp(firebaseConfig);

const Task2 = () => {

    const text1 = useRef(null);

    const [text, setText] = useState('');
    const [data, setData] = useState('');

    function delData(key) {
        const db = getDatabase();
        const reference = ref(db, 'users/' + key);
        set(reference, null);
    }

    function saveData() {
        var key = Math.random().toString(16).replace(".", "");
        var data = text;

        const db = getDatabase();
        const reference = ref(db, 'users/' + key);
        set(reference, {
            data: data,
            regdate: new Date().toString()
        });

        text1.current.clear();
    }


    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 15, borderBottomColor: '#aaa', borderBottomWidth: 1, flexDirection: 'row', }}>
                <Text style={{ flex: 1, fontSize: 16 }}>
                    {item.data}
                </Text>
                <Button title="삭제" color='red' onPress={() => delData(item.key)} />
            </View>
        )
    }

    useEffect(() => {

        const db = getDatabase();
        const reference = query(ref(db, 'users'), orderByChild('regdate'));

        onValue(reference, (snapshot) => {
            console.log(snapshot);

            const tmp = [];

            snapshot.forEach((child) => {
                tmp.unshift({
                    key: child.key,
                    data: child.val().data,
                    regdate: child.val().regdate,
                });
            });

            console.log(tmp);
            setData(tmp);
        });

    }, [])

    return (
        <View style={{  flex: 1 }}>
            <StatusBar style="auto" />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 15 }}>
                    <Text style={styles.title}>부품 리스트</Text>
                </View>
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <TextInput style={{ backgroundColor: "#f2f2f2", padding: 5, flex: 1 }}
                            ref={text1}
                            onChangeText={text => setText(text)} placeholder="부품을 입력하세요." multiline/>

                        <Button title="추가" onPress={() => saveData()} />
                    </View>
                    <View>
                        <FlatList data={data} renderItem={renderItem} style={{ padding: 15 }} />
                    </View>
                </View>

            </SafeAreaView>
        </View>
    );
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

export default Task2