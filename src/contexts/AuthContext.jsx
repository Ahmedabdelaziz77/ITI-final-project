import { createContext, useContext, useEffect, useReducer } from "react";
import { getUsers, initializeUsers } from "../utils/usersLocalStorage";
const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  users: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "setUsers":
      return { ...state, users: action.payload };
    default:
      throw new Error("Invalid action type");
  }
}
const FAKE_USERS = [
  {
    name: "ahmed",
    email: "ahmedabdelaziz@example.com",
    password: "zoz",
    role: "admin",
  },
  {
    name: "john",
    email: "johnsmith@example.com",
    password: "password123",
    role: "user",
  },
  {
    name: "jane",
    email: "janedoe@example.com",
    password: "janesecurepass",
    role: "user",
  },
  {
    name: "admin",
    email: "admin@example.com",
    password: "adminpass",
    role: "admin",
  },
];

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, users }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    initializeUsers(FAKE_USERS);
    const loadedUsers = getUsers();
    dispatch({ type: "setUsers", payload: loadedUsers });
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "login", payload: JSON.parse(storedUser) });
    }
  }, []);
  function Login(email, password) {
    const FAKE_USER = users.find(
      (FAKE_USER) =>
        FAKE_USER.email === email && FAKE_USER.password === password
    );
    if (FAKE_USER) {
      const user = { ...FAKE_USER };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
  function Logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("users");
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export { AuthProvider, useAuth };
