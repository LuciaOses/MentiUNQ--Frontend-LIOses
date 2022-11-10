export interface Action {
  type: string;
  payload: any;
}

const IsAuthenticated = { loggedIn: false };

export function AuthReducer(state = IsAuthenticated, action: Action) {
  //Tengo por parametro un texto
  switch (action.type) {
    //Usuario Ingresa a la App
    case "login":
      return { ...action.payload, loggedIn: true };
    //Usuario sale de la App
    case "logout":
      return { loggedIn: false };

    default:
      return state;
  }
}
