import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              headerTintColor: "black",
              statusBarStyle: "dark",
            }}
          />
          <Stack.Screen
            name="folders"
            options={{
              headerTitle: "Folders",
              headerTintColor: "black",
              statusBarStyle: "dark",
            }}
          />
          <Stack.Screen
            name="create-folder"
            options={{
              headerTitle: "Create Folder",
              headerTintColor: "black",
              statusBarStyle: "dark",
            }}
          />
          <Stack.Screen
            name="[folder]"
            options={{
              headerTitle: "View Folder",
              headerTintColor: "black",
              statusBarStyle: "dark",
            }}
          />
          <Stack.Screen
            name="save-to-folder"
            options={{
              headerTitle: "Save To Folder",
              headerTintColor: "black",
              statusBarStyle: "dark",
              presentation: "modal",
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
