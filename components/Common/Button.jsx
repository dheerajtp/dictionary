import styles from "@/assets/styles";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ text, create = false, onClick, disabled = false }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onClick}
      disabled={disabled}
    >
      {create && <Feather name="plus" size={16} color="#4F6C92" />}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
