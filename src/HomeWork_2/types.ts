export type User = {
  id: string;
  login: string;
  password: string;
  age: number;
  is_deleted: boolean;
};

export type UserRequestData = {
  login: string;
  password: string;
  age: number;
}
