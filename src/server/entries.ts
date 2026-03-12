// Populated automatically during the build phase by picking
// all server exports from 'src/entries/<entry_name>/server(/index)?.(js|ts)'
export const entries = (
  await Promise.all([
    // files-demo
    import("../entries/files-demo/server.ts"),
    // react-demo
    import("../entries/react-demo/server/index.ts"),
  ])
).map(({ server }) => server);
