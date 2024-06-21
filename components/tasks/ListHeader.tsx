import { StyleSheet, useColorScheme } from "react-native";
import { ThemedView, ThemedText } from "../theme";
import { Task } from "@/models";
import { Colors } from "@/constants/Colors";

//TODO: Retrieve count from backend
export const countPendingTasks = (tasks: Task[]): number => {
  return tasks.reduce((acc, task) => {
    return task.completed ? acc + 1 : acc;
  }, 0);
};

interface Props {
  tasks: Task[];
}

const ListHeader = ({ tasks }: Props) => {
  const theme = useColorScheme() ?? "light"; //TODO: Fix this in order to avoid the nullish check

  return (
    <ThemedView
      style={[styles.container, { shadowColor: Colors[theme].background }]}
    >
      <ThemedText type="subtitle" style={{ fontSize: 25 }}>
        {new Date().toDateString()}
      </ThemedText>
      {tasks.length > 0 && (
        <ThemedText type="defaultSemiBold">
          {countPendingTasks(tasks)} pending tasks
        </ThemedText>
      )}
    </ThemedView>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  list: {
    gap: 10,
    marginTop: 10,
  },
});
