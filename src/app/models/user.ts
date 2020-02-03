export interface  User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  id: number;
  phone: string;
  address: string;
  city: string;
  country: string;
  image: string;
  date: Date;
}

export interface Mail {
  sender_name: string;
  sender_username: string;
  receiver_name: string;
  receiver_username: string;
  receivers: string[];
  subject: string;
  has_attachment: boolean;
  read: boolean;
  deleted: boolean;
  id: number;
  date: Date;
  date_sent: Date;
  reply_to: string;
  message_id: number;
  was_bcc: boolean;
  hovered?: boolean;
  replying: boolean;
  text_plain?: string;
  text_html?: string;
  body?: string;
  attachments: string[];
}



