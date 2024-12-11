import styles from "@/assets/styles";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import FolderOptions from "@/components/Folders/FolderOptions";
import { useRouter } from "expo-router";
import useHomeDetails from "@/hooks/services/useHomeDetails";
import useFolder from "@/hooks/services/useFolder";

const FolderContainer = ({
  titleShow = false,
  title = "",
  allFolderShow = false,
  limit = false,
}) => {
  const {
    folderDetails,
    isLoading: isFetchingFolders,
    setFolderDetails,
  } = useHomeDetails();
  const { deleteFolder, isLoading: isDeletingFolder } = useFolder();
  const router = useRouter();

  const displayFolders = limit
    ? folderDetails.length > 0
      ? folderDetails.slice(-3)
      : [].slice(0, 3)
    : folderDetails.length > 0
    ? folderDetails
    : [];

  // const handleDelete = async (id) => {
  //   const success = await deleteFolder(id);
  //   if (success) {
  //     // Immediately update the local state by filtering out the deleted folder
  //     setFolderDetails(folderDetails.filter((folder) => folder.id !== id));
  //     router.push("/");
  //   }
  // };

  const handleDelete = (id) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this folder?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            const success = await deleteFolder(id);
            if (success) {
              setFolderDetails(
                folderDetails.filter((folder) => folder.id !== id)
              );
              router.push("/");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (isFetchingFolders) {
    return (
      <View style={[styles.folders, styles.centerContent]}>
        <ActivityIndicator size="large" color="#4F6C92" />
      </View>
    );
  }

  return (
    <View style={styles.folders}>
      {titleShow && <Text style={styles.sectionTitle}>{title}</Text>}
      {displayFolders.map((folder) => (
        <View key={folder.id} style={styles.folderItem}>
          <View style={styles.folderLeft}>
            <Feather name="folder" size={20} color="#4F6C92" />
            <Text style={styles.folderName}>{folder.folder}</Text>
          </View>
          <View style={styles.folderRight}>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                router.push(`/${folder.id}`);
              }}
            >
              <Text style={styles.openButtonText}>Open</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.openButton,
                isDeletingFolder && styles.disabledButton,
              ]}
              onPress={() => handleDelete(folder.id)}
              disabled={isDeletingFolder}
            >
              {isDeletingFolder ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.openButtonText}>Delete</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <FolderOptions allFolderShow={allFolderShow} />
    </View>
  );
};

export default FolderContainer;
