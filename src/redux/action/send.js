export const send = (id, sender, subject, description, time) => {
  return {
    type: "SEND",
    id,
    sender,
    subject,
    description,
    time,
  };
};
