import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

function GoalItem(this: any, props: any) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
  },
});
