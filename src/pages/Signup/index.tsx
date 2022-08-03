import { useState } from "react";

import { useAppContext } from "../../Context/ContextApp";
import { api } from "../../Services/api";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const { setUser } = useAppContext();

  const handleRegisterInApllication = async () => {
    const { data } = await api.post("/register", { email });
    if (data) {
      setUser(data.user);
      console.log(data.user);

      localStorage.setItem("USER_DATA", JSON.stringify(data.user));
    }
  };

  return (
    <div>
      <input
        placeholder="E-mail"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="button" onClick={handleRegisterInApllication}>
        Registrar
      </button>
    </div>
  );
};
