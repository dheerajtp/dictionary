import styles from "@/assets/styles";
import Header from "@/components/Common/Header";
import FolderContainer from "@/components/Folders/FolderContainer";
import { ScrollView } from "react-native";

const Folders = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title={"All Folders"} />
      <FolderContainer titleShow={false} allFolderShow={false} />
    </ScrollView>
  );
};

export default Folders;
