import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { router } from "expo-router";
import { Task } from "@/models";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../theme";

const TaskItem = (task: Task) => {
  const { title, description, dateToComplete, completed } = task;

  const theme = useColorScheme() ?? "light";

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: Colors[theme].secondary }]}
      onPress={() =>
        router.push({
          pathname: `task/${task.id}`,
        })
      }
    >
      <ThemedText
        type="subtitle"
        numberOfLines={1}
        style={task.completed ? styles.taskCompleted : {}}
      >
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    borderRadius: 20,
    padding: 20,
  },
  taskCompleted: {
    textDecorationLine: "line-through",
    opacity: 0.2,
  },
});
