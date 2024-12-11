import { View, Text } from "react-native";
import styles from "@/assets/styles/index";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
