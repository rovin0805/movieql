import { people, getById } from "./db";

const resolver = {
  Query: {
    people: () => people,
    // The first argument is the root query.
    // resolver: (root, args, context, info)
    person: (_, { id }) => getById(id),
  },
};

export default resolver;
