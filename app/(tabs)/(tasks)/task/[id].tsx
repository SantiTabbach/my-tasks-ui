import { StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useFetchTaskById } from "@/hooks";
import { ThemedContainer, ThemedText } from "@/components/theme";

const TaskDetails = () => {
  const params = useLocalSearchParams<{ id: string }>();

  const { task, isLoading } = useFetchTaskById(params.id!);

  if (isLoading) {
    return <Text>Loading task...</Text>;
  }

  console.log(params);
  console.log("task -> ", task);
  return (
    task && (
      <ThemedContainer>
        <Text>{JSON.stringify(task)}</Text>
        <ThemedText type="default">Default</ThemedText>
        <ThemedText type="defaultSemiBold">DefaultSemiBold</ThemedText>
        <ThemedText type="link">Link</ThemedText>
        <ThemedText type="subtitle">Subtitle</ThemedText>
        <ThemedText type="title">Title</ThemedText>
      </ThemedContainer>
    )
  );
};

export default TaskDetails;

const styles = StyleSheet.create({});
