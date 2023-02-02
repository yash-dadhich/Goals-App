import { StyleSheet, View, Text, Pressable } from "react-native"
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#340d68" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    margin: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 12,
    color: "white",
    fontSize: 18,
  },
})
