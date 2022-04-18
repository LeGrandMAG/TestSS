import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from './components/Task';
export default function App() {
  return (

    
    <ScrollView style={styles.container}>
      
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's tasks
        </Text>
        <View style={{
          borderBottomColor: "#CAD1DA", 
          borderBottomWidth: 1 }}>

        </View>
        <View style={styles.items}>
          {/* This is were we will hold all the style */}
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </View>

        

      </View>
    </ScrollView>
  );
}
//StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    

  },
  sectionTitle: {
    color: "black",
    fontSize: 30,
    paddingBottom:8,
    fontWeight: 'bold',
  },
  items: {},


});
