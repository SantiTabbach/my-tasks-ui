import { Role, Task, User } from "@/models/models";

const mockedUser = {
  username: "Santi",
  password: "SantiDev1!",
  roles: new Set<Role>(["Admin", "User"]),
  active: true,
};

export const getUser = async (): Promise<User> => {
  return mockedUser;
};

const mockedTasks = [
  {
    id: "0",
    owner: "mockId",
    title: "Ir al supermercado",
    description: `I can't seem to face up to the facts
    I'm tense and nervous and I can't relax
    I can't sleep, 'cause my bed's on fire
    Don't touch me, I'm a real live wire
    Psycho killer, qu'est-ce que c'est?
    Fa, fa, fa, fa, fa, fa, fa, far better
    Run, run, run, run, run, run, run away
    Psycho killer, qu'est-ce que c'est?
    Fa, fa, fa, fa, fa, fa, fa, far better
    Run, run, run, run, run, run, run away`,
    completed: false,
    createdDate: new Date(),
    updatedDate: new Date(),
    dateToComplete: new Date(),
  },
  {
    id: "1",
    owner: "mockId",
    title: "Enviar telegrama de renuncia",
    description: `I can't seem to face up to the facts
      I'm tense and nervous and I can't relax
      I can't sleep, 'cause my bed's on fire
      Don't touch me, I'm a real live wire
      Fa, fa, fa, fa, fa, fa, fa, far better
      Run, run, run, run, run, run, run away`,
    completed: true,
    createdDate: new Date(),
    updatedDate: new Date(),
    dateToComplete: new Date(),
  },
  {
    id: "2",
    owner: "mockId",
    title: "Esta es una tarea con un titulo bastante largo.",
    description: `I can't seem to face up to the facts
      I'm tense and nervous and I can't relax
      I can't sleep, 'cause my bed's on fire
      Don't touch me, I'm a real live wire`,
    completed: false,
    createdDate: new Date(),
    updatedDate: new Date(),
    dateToComplete: new Date(),
  },
  {
    id: "3",
    owner: "mockId",
    title: "Comprar balanceado para el Milo",
    description: "Mi tareubi",
    completed: true,
    createdDate: new Date(),
    updatedDate: new Date(),
    dateToComplete: new Date(),
  },
];

export const getTasks = async (): Promise<Task[]> => {
  return mockedTasks;
};

export const getTaskById = async (id: string): Promise<Task> => {
  return mockedTasks.filter((task) => task.id === id)[0];
};
