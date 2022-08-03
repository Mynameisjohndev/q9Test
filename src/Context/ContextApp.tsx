import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export interface IUser {
  email: string;
  token: string;
}

interface IContextData {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  breed: string;
}

interface IContextProvide {
  children: ReactNode;
}

const Context = createContext({} as IContextData);

const AppContextProvider = ({ children }: IContextProvide) => {
  const [user, setUser] = useState({} as IUser);
  const [breed, setBreed] = useState("chihuahua");

  useEffect(() => {
    const localUser = localStorage.getItem("USER_DATA");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <Context.Provider value={{ user, setUser, breed }}>
      {children}
    </Context.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(Context);
  return context;
};

export { AppContextProvider, useAppContext };
