export default interface Message {
  sender: string;
  subject: string;
  description: string;
  time: string;
  id: string;
  status: string;
  tags: string[];
  message: {
    sender_email: string;
    body: string;
  };
}
