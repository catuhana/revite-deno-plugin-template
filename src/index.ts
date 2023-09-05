(() => {
  const client = window.controllers.client.getReadyClient();
  console.log("Plugin started!", client);

  return {
    onUnload: () => {
      console.info("Plugin stopped!");
    },
  };
});
