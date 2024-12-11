import styles from "@/assets/styles";
import useHomeDetails from "@/hooks/services/useHomeDetails";
import useWordMeaning from "@/hooks/services/useWordMeaning";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SaveToFolder = () => {
  const { text, data } = useLocalSearchParams();
  const { folderDetails } = useHomeDetails();
  const { saveMeaning, isLoading } = useWordMeaning();

  const saveToFolder = (id) => {
    saveMeaning(id, text, data);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loadingIndicator}
        />
      );
    }

    return folderDetails.map((folder) => (
      <View key={folder.id} style={styles.folderItem}>
        <View style={styles.folderLeft}>
          <Feather name="folder" size={20} color="#4F6C92" />
          <Text style={styles.folderName}>{folder.folder}</Text>
        </View>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => saveToFolder(folder.id)}
        >
          <Text style={styles.openButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return <ScrollView style={styles.container}>{renderContent()}</ScrollView>;
};

export default SaveToFolder;
