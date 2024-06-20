import { Role, Task, User } from "@/models/models";

const mockedUser = {
  username: "Santi",
  password: "SantiDev1!",
  roles: new Set<Role>(["Admin", "User"]),
  active: true,
};

const mockedTasks = [
  {
    id: "1",
    owner: "user1",
    title: "Short title",
    description: "Short description",
    completed: false,
    createdDate: new Date("2024-05-01T08:00:00Z"),
    updatedDate: new Date("2024-05-02T08:00:00Z"),
    dateToComplete: new Date("2024-06-01T08:00:00Z"),
  },
  {
    id: "2",
    owner: "user2",
    title: "This is a bit longer title for the task",
    description: "This description is slightly longer than the previous one.",
    completed: true,
    createdDate: new Date("2024-05-03T09:00:00Z"),
    updatedDate: new Date("2024-05-04T09:00:00Z"),
    dateToComplete: new Date("2024-06-03T09:00:00Z"),
  },
  {
    id: "3",
    owner: "user3",
    title: "Medium length title",
    description:
      "This is a medium length description, providing a bit more detail about the task at hand.",
    completed: false,
    createdDate: new Date("2024-05-05T10:00:00Z"),
    updatedDate: new Date("2024-05-06T10:00:00Z"),
    dateToComplete: new Date("2024-06-05T10:00:00Z"),
  },
  {
    id: "4",
    owner: "user4",
    title: "Another short title",
    description: "Short desc.",
    completed: true,
    createdDate: new Date("2024-05-07T11:00:00Z"),
    updatedDate: new Date("2024-05-08T11:00:00Z"),
    dateToComplete: new Date("2024-06-07T11:00:00Z"),
  },
  {
    id: "5",
    owner: "user5",
    title:
      "Long title for testing purposes and making sure everything works as expected",
    description:
      "This is a very long description intended to test the system's handling of larger text fields. It includes a lot of details and various aspects to consider, ensuring that the text handling and storage mechanisms can cope with larger inputs without any issues or performance degradation.",
    completed: false,
    createdDate: new Date("2024-05-09T12:00:00Z"),
    updatedDate: new Date("2024-05-10T12:00:00Z"),
    dateToComplete: new Date("2024-06-09T12:00:00Z"),
  },
  {
    id: "6",
    owner: "user6",
    title: "Task with an extremely detailed description",
    description:
      "This is an extremely detailed description for a task. It covers every single aspect of what needs to be done, who needs to be involved, what tools are required, the timeline for completion, and potential challenges that may arise during the process. This task is very important and needs careful attention to detail.",
    completed: true,
    createdDate: new Date("2024-05-11T13:00:00Z"),
    updatedDate: new Date("2024-05-12T13:00:00Z"),
    dateToComplete: new Date("2024-06-11T13:00:00Z"),
  },
  {
    id: "7",
    owner: "user7",
    title: "Short",
    description: "This is a short task description.",
    completed: false,
    createdDate: new Date("2024-05-13T14:00:00Z"),
    updatedDate: new Date("2024-05-14T14:00:00Z"),
    dateToComplete: new Date("2024-06-13T14:00:00Z"),
  },
  {
    id: "8",
    owner: "user8",
    title: "Medium title",
    description:
      "Medium length description for a task that is supposed to be not too short and not too long.",
    completed: true,
    createdDate: new Date("2024-05-15T15:00:00Z"),
    updatedDate: new Date("2024-05-16T15:00:00Z"),
    dateToComplete: new Date("2024-06-15T15:00:00Z"),
  },
  {
    id: "9",
    owner: "user9",
    title: "Detailed task",
    description:
      "A more detailed description that covers various points and ensures that the task requirements are clear and well-understood.",
    completed: false,
    createdDate: new Date("2024-05-17T16:00:00Z"),
    updatedDate: new Date("2024-05-18T16:00:00Z"),
    dateToComplete: new Date("2024-06-17T16:00:00Z"),
  },
  {
    id: "10",
    owner: "user10",
    title: "Final task for testing",
    description:
      "The final task in this mock data set, with a description that ensures completeness of the test cases.",
    completed: true,
    createdDate: new Date("2024-05-19T17:00:00Z"),
    updatedDate: new Date("2024-05-20T17:00:00Z"),
    dateToComplete: new Date("2024-06-19T17:00:00Z"),
  },
];

export const getTasks = async (): Promise<Task[]> => {
  return mockedTasks;
};

export const getTaskById = async (id: string): Promise<Task> => {
  return mockedTasks.filter((task) => task.id === id)[0];
};
