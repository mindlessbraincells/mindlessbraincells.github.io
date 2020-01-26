export function generateRandomHeadline() {
  const someRandomText = [
    "Yoo-poo!",
    "the_terminal-v1.0.0",
    "Hi~",
    "konnichiwa!",
    "...",
    "404: commands not found"
  ];
  const textEntryCount = someRandomText.length - 1;
  const notSoRandomIndex = Math.floor(Math.random() * textEntryCount) + 1;

  return someRandomText[notSoRandomIndex];
}
