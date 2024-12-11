import { View, TextInput, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/assets/styles/index";
import useDictionaryInputs from "@/hooks/services/useDictionaryInputs";
import WordMeaning from "@/components/Meaning/WordMeaning";

const SearchBar = () => {
  const { handleWord, isLoading, data = [], word } = useDictionaryInputs();

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for words"
          placeholderTextColor="#999"
          onChangeText={handleWord}
          editable={!isLoading}
        />
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loadingIndicator}
          />
        )}
      </View>

      {data && (
        <View style={styles.meaningContainer}>
          <WordMeaning data={data} text={word} />
        </View>
      )}
    </View>
  );
};

export default SearchBar;
