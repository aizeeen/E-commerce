import { FC, PropsWithChildren, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (username: string, token: string) => {
    setUsername(username);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ username, token, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
