import * as SQLite from "expo-sqlite";
import { useState } from "react";
import useHomeDetails from "./useHomeDetails";

const useFolder = () => {
  const [folderName, setFolderName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { fetchData } = useHomeDetails();

  const addFolder = async (folderName) => {
    try {
      const db = await SQLite.openDatabaseAsync("dict");
      await db.runAsync("INSERT INTO folders (folder) VALUES (?)", [
        folderName,
      ]);
      await fetchData(); // Refresh folder list after adding
      return true;
    } catch (error) {
      return false;
    }
  };

  const deleteFolder = async (folderId) => {
    setIsLoading(true);
    try {
      const db = await SQLite.openDatabaseAsync("dict");
      const result = await db.runAsync("DELETE FROM folders WHERE id = ?", [
        folderId,
      ]);

      if (result.changes) {
        await fetchData();
        alert("Folder and its contents deleted");
        return true;
      }
      alert("Some Error Occurred");
      return false;
    } catch (error) {
      alert("Error deleting folder");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addFolder,
    setFolderName,
    folderName,
    isLoading,
    setIsLoading,
    deleteFolder,
  };
};

export default useFolder;
