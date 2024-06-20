import { StyleSheet } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText, ThemedContainer, ThemedView } from "@/components/theme";
import { useFetchUser } from "@/hooks";
import TasksList from "@/components/tasks/TasksList";

export default function HomeScreen() {
  const { isLoading, user } = useFetchUser();

  if (isLoading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  return (
    user && (
      <ThemedContainer>
        <ThemedView style={styles.titleContainer}>
          <HelloWave />
          <ThemedText type="title">What's up, {user.username}!</ThemedText>
        </ThemedView>
        <TasksList />
      </ThemedContainer>
    )
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
});
