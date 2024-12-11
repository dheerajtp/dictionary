import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "@/assets/styles";

const WordMeaning = ({ data = [], text = "", save = true }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No data available</Text>
      </View>
    );
  }

  const router = useRouter();

  const handleNavigation = () => {
    router.push({
      pathname: "save-to-folder",
      params: { data: JSON.stringify(data), text },
    });
  };

  const renderDefinition = (def, meaningIndex, defIndex) => (
    <View key={`def-${meaningIndex}-${defIndex}`}>
      <Text style={styles.definitionText}>Definition: {def.definition}</Text>
      {def.example && (
        <Text style={styles.exampleText}>Example: {def.example}</Text>
      )}
    </View>
  );

  const renderMeaning = (meaning, meaningIndex) => (
    <View
      key={`meaning-${meaningIndex}-${meaning.partOfSpeech}`}
      style={styles.definitionSection}
    >
      <Text style={styles.subHeading}>
        Part of Speech: {meaning.partOfSpeech}
      </Text>
      {meaning.definitions?.map((def, defIndex) =>
        renderDefinition(def, meaningIndex, defIndex)
      )}
    </View>
  );

  const renderListItems = (title, items, meaningIndex) => {
    if (!items?.length) return null;

    return (
      <View style={styles.section} key={`${title}-${meaningIndex}`}>
        <Text style={styles.subHeading}>{title}</Text>
        {items.map((item, idx) => (
          <Text
            key={`${title}-${meaningIndex}-${item}-${idx}`}
            style={styles.synonymText}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  };

  const renderExampleSentences = () => {
    const examples = data[0]?.meanings
      .flatMap((meaning, meaningIndex) =>
        meaning.definitions?.map((def, defIndex) =>
          def.example
            ? {
                text: def.example,
                key: `example-${meaningIndex}-${defIndex}`,
              }
            : null
        )
      )
      .filter(Boolean);

    if (!examples?.length) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.subHeading}>Example Sentences</Text>
        {examples.map(({ text, key }) => (
          <Text key={key} style={styles.exampleText}>
            {text}
          </Text>
        ))}
      </View>
    );
  };

  const word = data[0];
  const meanings = word?.meanings || [];

  return (
    <ScrollView style={styles.meaningContainer}>
      <Text style={styles.heading}>{word?.word || "No word available"}</Text>

      {meanings.map((meaning, index) => renderMeaning(meaning, index))}

      {meanings[0]?.synonyms?.length > 0 &&
        renderListItems("Synonyms", meanings[0].synonyms, 0)}

      {meanings[0]?.antonyms?.length > 0 &&
        renderListItems("Antonyms", meanings[0].antonyms, 0)}

      {renderExampleSentences()}

      {save && (
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default WordMeaning;
