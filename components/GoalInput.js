import { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("")

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText("")
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/download.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    justifyContent: "center",
  },

  textInput: {
    width: "100%",
    paddingHorizontal: 8,
    borderColor: "#cccccc",
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
