import { useReducer } from "react";
import { AppRouter } from "./app/router/AppRouter";
import { AuthContext } from "./app/views/store/contexts/AuthContext";
import { AuthReducer } from "./app/views/store/reducers/AuthReducer";

const init = () => {
  let sessionUser: any = sessionStorage.getItem("user");
  let user: any;
  if (!sessionUser) {
    user = sessionUser;
  } else {
    user = JSON.parse(sessionUser);
  }
  return user;
};

function App() {
  <h1>Funciono!!</h1>
  const [user, dispatchUser] = useReducer(AuthReducer, {}, init);
  return (
    <AuthContext.Provider value={{user, dispatchUser}}>
      <AppRouter/>
    </AuthContext.Provider>
  );
}

export default App;
