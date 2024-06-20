import { ThemedView } from "../theme";
import { ThemedText } from "../theme";
import { Task } from "@/models/models";

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
  return (
    <ThemedView>
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
