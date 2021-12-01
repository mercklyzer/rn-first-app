import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(),value:goalTitle}])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => currentGoals.filter((goal) => goal.key !== goalId))
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler}/>

      {/* <ScrollView>
        {courseGoals.map((goal) => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
      </ScrollView> */}
      <FlatList 
        data={courseGoals} 
        renderItem={itemData =>  <GoalItem onDelete={removeGoalHandler} id={itemData.item.key} title={itemData.item.value}></GoalItem>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
