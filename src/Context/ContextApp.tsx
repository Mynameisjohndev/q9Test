import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

import { api } from "../Services/api";

export interface IUser {
  email?: string;
  token?: string;
}

interface IContextData {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

interface IContextProvide {
  children: ReactNode;
}

const Context = createContext({} as IContextData);

const AppContextProvider = ({ children }: IContextProvide) => {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    const localUser = localStorage.getItem("USER_DATA");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  useEffect(() => {
    if (user.token !== "") {
      api.defaults.headers.common.Authorization = `${user.token}`;
    }
  }, [user]);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(Context);
  return context;
};

export { AppContextProvider, useAppContext };
