import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import { TextInput, SafeAreaView, Button, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
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



const Task2 = ({navigation}) => {

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
        <ScrollView>
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
                            <FlatList 
                            data={data} 
                            renderItem={renderItem} style={{ padding: 10 }} />
                        </View>
                        <View style={styles.xx}>
                            <TouchableOpacity
                            style = {styles.butto}
                            onPress = {() => navigation.navigate("Vid")}>
                                <Text style={{color:"white", fontSize: 20, fontWeight: 'bold'}}>동영상보기</Text>
                            </TouchableOpacity>
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
                            <TouchableOpacity
                            style = {styles.butto}
                            onPress = {() => navigation.goBack()}>
                                <Text style={{color:"white"}}>GO BACK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </SafeAreaView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    butto:{
        alignItems:'center',
        backgroundColor:'rgb(20,100,200)',
        padding:20,
        width: 200,
        marginVertical: 10,
        color:"white",
    },
    post:{
        margin: 10,
        borderRadius: 3,
        
    },
    xx:{
        position:"relative",
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
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