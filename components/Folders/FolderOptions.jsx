import styles from "@/assets/styles";
import Button from "@/components/Common/Button";
import { View } from "react-native";
import { useRouter } from "expo-router";

const FolderOptions = ({ allFolderShow }) => {
  const router = useRouter();

  const handleNavigation = (create) => {
    router.push(create ? "create-folder" : "/folders");
  };

  return (
    <View style={styles.container}>
      <Button
        text={"Create Folder"}
        create={true}
        onClick={() => {
          handleNavigation(true);
        }}
      />
      {allFolderShow && (
        <Button
          text={"All Folders"}
          onClick={() => {
            handleNavigation(false);
          }}
        />
      )}
    </View>
  );
};

export default FolderOptions;
