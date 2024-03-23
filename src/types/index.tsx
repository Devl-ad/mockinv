export interface RouteInterface {
  id: number;
  element: JSX.Element;
  path: string;
}

export interface ExistingDetailsReqInterface {
  emails: string[];
  usernames: string[];
}

export interface RegisterResponse {
  password?: string | Array<string>;
  email?: string | Array<string>;
  msg?: string;
}
export interface LoginResponse {
  token: string;

  error?: string;
}

export interface CustomButtonIn {
  loading: boolean;
  color: string;
  text: string;
  type: "button" | "submit" | "reset";
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}
