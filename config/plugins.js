module.exports = {
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 10000,
    disabledPlugins: [],
    disabledExtensions: [],
    apolloServer: {
      tracing: true,
    },
  },
};
