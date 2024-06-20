import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useFetchTasks } from "@/hooks";
import { ThemedText } from "../theme";
import TaskItem from "./TaskItem";
import ListHeader from "./ListHeader";

const TasksList = () => {
  const { isLoading, tasks } = useFetchTasks();

  if (isLoading) {
    return <ThemedText>Loading tasks...</ThemedText>;
  }

  if (!tasks) {
    return <ThemedText>No tasks</ThemedText>;
  }

  return (
    <React.Fragment>
      <ListHeader tasks={tasks} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={tasks}
        renderItem={({ item }) => <TaskItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </React.Fragment>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  list: {
    gap: 10,
    paddingVertical: 16,
  },
});
