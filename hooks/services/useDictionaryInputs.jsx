import { useState, useEffect, useRef } from "react";
import { useGetMeaning } from "../api/useDictionaryAPI";
import { ToastAndroid } from "react-native";

const useDictionaryInputs = () => {
  const [word, setWord] = useState("");
  const debounceTimeout = useRef(null);

  const { isLoading, data, isError, refetch } = useGetMeaning(word);

  const handleWord = (text) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const trimmedText = text.trim();
      console.log('Trimmed text:', trimmedText);
      setWord(trimmedText);

      if (trimmedText) {
        refetch(); // Trigger refetch if word is non-empty
      } else {
        ToastAndroid.show("Please enter your word!", ToastAndroid.SHORT);
      }
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return {
    word,
    isLoading,
    data,
    isError,
    handleWord,
    refetch,
  };
};

export default useDictionaryInputs;
