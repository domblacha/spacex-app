import { InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launchesPast: {
          read(existing, { args }) {
            if (args) {
              return (
                existing &&
                existing.slice(args.offset, args.offset + args.limit)
              );
            }
          },
          ...offsetLimitPagination(),
        },
      },
    },
  },
});
