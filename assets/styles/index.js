import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Platform.OS === "ios" ? 80 : 70,
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 50 : 30,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2C3A4B",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
    color: "#2C3A4B",
  },
  recentSearches: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3A4B",
    marginBottom: 10,
  },
  word: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4F6C92",
  },
  wordDescription: {
    fontSize: 12,
    color: "#7A8CA3",
    marginTop: 4,
  },
  folders: {
    marginBottom: 20,
  },
  folderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  folderLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  folderRight: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8, 
  },
  folderName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2C3A4B",
    marginLeft: 8,
    flexShrink: 1
  },
  openButton: {
    backgroundColor: "#EDF1F7",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginHorizontal: 4,
  },
  openButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4F6C92",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF1F7",
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2C3A4B",
    marginLeft: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2C3A4B",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F0F4F8",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: "#2C3A4B",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0E6EE",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  word: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  definition: {
    fontSize: 16,
    color: "#666",
  },
  partOfSpeech: {
    fontSize: 16,
    color: "#333",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  listItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItemText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  exampleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  exampleImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  exampleText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  saveButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  shareButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shareButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  meaningContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  definitionText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    lineHeight: 22,
  },
  separator: {
    height: 15,
    backgroundColor: "transparent",
  },
  separatorLine: {
    height: 1,
    backgroundColor: "#E0E6EE",
    marginHorizontal: 16,
  },
});

export default styles;
