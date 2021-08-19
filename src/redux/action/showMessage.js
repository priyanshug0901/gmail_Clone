export default function sendMessageData(
  id,
  company,
  description,
  subject,
  time
) {
  return {
    type: "sendMailData",
    id,
    company,
    description,
    subject,
    time
  };
}
