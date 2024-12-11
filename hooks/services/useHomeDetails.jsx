import { useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";

const useHomeDetails = () => {
  const [folderDetails, setFolderDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const db = await SQLite.openDatabaseAsync("dict");
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS folders (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          folder TEXT UNIQUE
        );
      `);
      const allRows = await db.getAllAsync("SELECT * FROM folders");
      setFolderDetails(allRows);
      return allRows;
    } catch (error) {
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    folderDetails,
    fetchData,
    setFolderDetails,
    isLoading,
  };
};

export default useHomeDetails;
