import styles from "@/assets/styles";
import Button from "@/components/Common/Button";
import Header from "@/components/Common/Header";
import {
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
  View,
} from "react-native";
import React, { useState } from "react";
import useFolder from "@/hooks/services/useFolder";
import { useRouter } from "expo-router";

const CreateFolder = () => {
  const router = useRouter();
  const { addFolder, folderName, setFolderName, isLoading, setIsLoading } =
    useFolder();

  const handleSave = async () => {
    if (!folderName.trim()) {
      alert("Please enter a folder name.");
      return;
    }
    setIsLoading(true);

    try {
      const success = await addFolder(folderName);
      if (success) {
        alert(`Folder "${folderName}" saved!`);
        router.push("/");
      } else {
        alert("Failed to save folder.");
      }
    } catch (error) {
      alert("An error occurred while saving the folder.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Create New Folder" />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Folder Name</Text>
        <TextInput
          style={styles.input}
          value={folderName}
          onChangeText={setFolderName}
          placeholder="Enter folder name"
          editable={!isLoading}
        />

        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loadingIndicator}
          />
        ) : (
          <Button
            onClick={handleSave}
            text="Save Folder"
            disabled={isLoading}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default CreateFolder;
