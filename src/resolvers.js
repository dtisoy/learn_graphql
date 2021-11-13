import { tasks } from "./sample";

export const resolvers = {
  Query: {
    hello: () => "hello world with graphql",
    greet: (root, { name }) => {
      return `Hello ${name} :)`;
    },
    tasks: () => tasks,
  },
};
