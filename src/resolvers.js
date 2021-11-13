import { tasks } from "./sample";

export const resolvers = {
  Query: {
    hello: () => "hello world with graphql",
    greet: (root, { name }) => {
      return `Hello ${name} :)`;
    },
    tasks: () => tasks,
  },
  Mutation: {
    createTask: (_, { input }) => {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
  },
};
