import { useState } from "react";
import { createContext } from "react";

const [user, setUser] = useState("");

const userContext = createContext({ user, setUser });
export default userContext;
