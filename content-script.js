
function splitTextAndEmojis(text) {
  const regex = /(\p{Extended_Pictographic}\uFE0F?)/gu;
  return text.split(regex).filter(Boolean);
}

function speakText(text) {
  return new Promise(resolve => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.onend = resolve;
    speechSynthesis.speak(utterance);
  });
}

function playEmojiSound(emoji) {
  return new Promise(resolve => {
    if (!EMOJI_SOUND_MAP[emoji]) {
      resolve();
      return;
    }

    const audio = new Audio(
      browser.runtime.getURL("sounds/" + EMOJI_SOUND_MAP[emoji])
    );

    audio.onended = resolve;
    audio.play();
  });
}

async function readTextWithEmojiSounds(text) {
  const parts = splitTextAndEmojis(text);

  for (const part of parts) {
    if (EMOJI_SOUND_MAP[part]) {
      await playEmojiSound(part);
    } else {
      await speakText(part);
    }
  }
}

browser.runtime.onMessage.addListener((message) => {
  if (message.type === "READ_PAGE") {
    const text = document.body.innerText;
    readTextWithEmojiSounds(text);
  }
});


