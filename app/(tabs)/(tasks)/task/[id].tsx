import { StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useFetchTaskById } from "@/hooks";
import { ThemedContainer, ThemedText } from "@/components/theme";

const SectionTitle = ({ title }: { title: string }) => (
  <ThemedText
    type="defaultSemiBold"
    style={{
      paddingTop: 16,
      paddingBottom: 4,
    }}
  >
    {title}
  </ThemedText>
);

const Description = ({ text }: { text: string }) => (
  <ThemedText type="default">{text}</ThemedText>
);

const TaskDetails = () => {
  const params = useLocalSearchParams<{ id: string }>();

  const { task, isLoading } = useFetchTaskById(params.id!);

  if (isLoading) {
    return <Text>Loading task...</Text>;
  }

  return (
    task && (
      <ThemedContainer>
        <ThemedText type="title">{task.title}</ThemedText>
        <Description
          text={`${task.completed ? "Completed" : "Uncompleted"} task.`}
        />
        <SectionTitle title="Due Date" />
        <ThemedText type="subtitle">
          {task.dateToComplete.toDateString()}
        </ThemedText>
        <SectionTitle title="Description" />
        <Description text={task.description} />
      </ThemedContainer>
    )
  );
};

export default TaskDetails;

const styles = StyleSheet.create({});
