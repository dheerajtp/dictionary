import { useEffect } from "react";
import Header from "@/components/Common/Header";
import useWordMeaning from "@/hooks/services/useWordMeaning";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FlatList, Text, View } from "react-native";
import WordMeaning from "@/components/Meaning/WordMeaning";
import styles from "@/assets/styles";

const ViewFolder = () => {
  const { folder } = useLocalSearchParams();
  const { meanings, fetchMeaningsByFolder, isLoading } = useWordMeaning();

  useEffect(() => {
    if (folder) {
      fetchMeaningsByFolder(folder); // Call this when folder ID is available
    }
  }, [folder]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const renderItem = ({ item }) => {
    return (
      <WordMeaning
        data={JSON.parse(item.meaning)}
        text={item.word}
        save={false}
      />
    );
  };

  return (
    <SafeAreaProvider>
      {meanings.length > 0 ? (
        <FlatList
          data={meanings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>No meanings found for this folder.</Text>
      )}
    </SafeAreaProvider>
  );
};

export default ViewFolder;
