import {StyleSheet, View, Button, TextInput, Modal} from 'react-native';
import React from 'react';
function GoalInput(props: any) {
  // function inside the component
  const [enteredGoalText, setEnteredGoalText] = React.useState<string>('');
  function goalInputHandler(text: string) {
    setEnteredGoalText(text);
  }

  // a way to add data in a parent function
  function addGoalHandler(): void {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 8,
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 24,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
});
