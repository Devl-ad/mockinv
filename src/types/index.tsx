export interface RouteInterface {
  id: number;
  element: JSX.Element;
  path: string;
}

export interface ExistingDetailsReqInterface {
  emails: string[];
  usernames: string[];
}
