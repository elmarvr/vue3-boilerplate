import { useDatabase } from "../db";

export const createContext = () => {
  const db = useDatabase();

  return {
    db,
  };
};
