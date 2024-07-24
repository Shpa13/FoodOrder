import { Stack } from "expo-router";

export default function MenuStack() {
  return (
    <Stack>
      {/* "name" tagets the file to place options (selecting the index file) further notes in [id] file*/}
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}
