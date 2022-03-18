export interface Post {
  userId: number;
  id: number;
  title: string;
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}
