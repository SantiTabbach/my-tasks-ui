import { getTaskById } from "@/mocks/apiMocks";
import { Task } from "@/models/models";
import { useEffect, useState } from "react";

const useFetchTaskById = (id: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      setIsLoading(true);

      const retrievedTask = await getTaskById(id);
      setTask(retrievedTask);

      setIsLoading(false);
    };

    fetchTask();
  }, []);

  return { isLoading, task };
};

export default useFetchTaskById;
