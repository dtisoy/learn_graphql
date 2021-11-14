import { tasks } from "./sample";
import User from "./models/User";

export const resolvers = {
  Query: {
    hello: () => "hello world with graphql",
    greet: (root, { name }, context) => {
      console.log(context);
      return `Hello ${name} :)`;
    },
    tasks: () => tasks,
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createTask: (_, { input }) => {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    createUser: async (_, { input }) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    deleteUser: async (_, { _id }) => {
      return await User.findByIdAndDelete(_id);
    },
    updateUser: async (_, { _id , input}) => {
      // the function return the old user, that's why the third parameter
      return await User.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
