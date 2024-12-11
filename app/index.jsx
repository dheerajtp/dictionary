import React from "react";
import { ScrollView, Text, SafeAreaView, View } from "react-native";
import Header from "@/components/Common/Header";
import SearchBar from "@/components/Common/SearchBar";
import FolderContainer from "@/components/Folders/FolderContainer";
import styles from "@/assets/styles";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header title="My Dictionary" />
        <SearchBar />
        <FolderContainer
          title="Folders"
          titleShow={true}
          allFolderShow={true}
          limit={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
