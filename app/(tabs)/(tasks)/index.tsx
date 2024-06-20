import { StyleSheet } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText, ThemedContainer, ThemedView } from "@/components/theme";
import TasksList from "@/components/tasks/TasksList";
import usePerformFetch from "@/hooks/usePerformFetch";
import { getUserById } from "@/data/users";

export default function HomeScreen() {
  const { isLoading, data: user } = usePerformFetch({
    fetchFn: getUserById,
    args: ["666e389c0970e2f36dc91f7a"], //TODO: Pull from token
  });

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
