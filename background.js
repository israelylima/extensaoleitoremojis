browser.runtime.onMessage.addListener((message) => {
  if (message.type === "PLAY_SOUND") {
    const audio = new Audio(
      browser.runtime.getURL("sounds/" + message.sound)
    );
    audio.play();
  }
});
