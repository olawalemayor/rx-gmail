import Messages from "./messages.json";

export function getMessages() {
  const messages = [...Messages];
  return messages;
}

export function getMessage(id) {
  const messages = [...Messages];
  return messages.find((m) => m.id === id);
}
