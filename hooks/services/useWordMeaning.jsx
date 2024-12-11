import { useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";
import { useRouter } from "expo-router";

const useWordMeaning = () => {
  const router = useRouter();
  const [meanings, setMeanings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initializeDatabase = async () => {
    try {
      setIsLoading(true);
      const db = await SQLite.openDatabaseAsync("dict");
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS meanings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          folder_id INTEGER,
          word VARCHAR(255),
          meaning TEXT,
          FOREIGN KEY (folder_id) REFERENCES folders (id)
        );
      `);
    } catch (error) {
      console.error("Error initializing meanings table:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveMeaning = async (folderId, word, meaning) => {
    try {
      setIsLoading(true);
      const db = await SQLite.openDatabaseAsync("dict");
      await db.runAsync(
        "INSERT INTO meanings (folder_id, word, meaning) VALUES (?, ?, ?)",
        [folderId, word, JSON.stringify(meaning)]
      );
      alert("Word and meaning saved successfully!");
      await fetchMeaningsByFolder(folderId);
      router.push("/");
    } catch (error) {
      console.error("Error saving meaning:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMeaningsByFolder = async (folderId) => {
    try {
      setIsLoading(true);
      const db = await SQLite.openDatabaseAsync("dict");
      const result = await db.getAllAsync(
        "SELECT id, word, meaning FROM meanings WHERE folder_id = ? ORDER BY id DESC",
        [folderId]
      );
      setMeanings(
        result.map((item) => ({
          ...item,
          meaning: JSON.parse(item.meaning),
        }))
      );
    } catch (error) {
      console.error("Error fetching meanings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initializeDatabase();
  }, []);

  return {
    meanings,
    saveMeaning,
    fetchMeaningsByFolder,
    isLoading,
  };
};

export default useWordMeaning;
