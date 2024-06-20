import { getTasks } from "@/mocks/apiMocks";
import { Task } from "@/models/models";
import { useEffect, useState } from "react";

const useFetchTasks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      const retrievedTasks = await getTasks();
      setTasks(retrievedTasks);
      setIsLoading(false);
    };

    fetchTasks();
  }, []);

  return { isLoading, tasks };
};

export default useFetchTasks;
