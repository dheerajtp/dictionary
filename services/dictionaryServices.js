import axios from "axios";

const getWordMeaning = async ({ queryKey }) => {
  const word = queryKey[1];
  if (!word) {
    console.warn("Empty word provided to getWordMeaning. Skipping API call.");
    return [];
  }
  console.log(`Fetching meaning for word: ${word}`);
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return response.data || [];
  } catch (error) {
    return [];
  }
};

const dictionaryServices = {
  getWordMeaning,
};

export default dictionaryServices;
