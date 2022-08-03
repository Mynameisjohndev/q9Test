import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface IUser {
  email: string;
  token: string;
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

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(Context);
  return context;
};

export { AppContextProvider, useAppContext };
