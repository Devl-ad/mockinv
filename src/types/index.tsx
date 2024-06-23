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
  otp_enabled: boolean;
  error?: string;
  userid?: number;
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

export interface ISignInContext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setstoreDate: React.Dispatch<React.SetStateAction<LoginResponse | undefined>>;
  storeDate: LoginResponse | undefined;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  laoding: boolean;
}
