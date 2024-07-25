import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      {/* "name" tagets the file to place options (selecting the index file) further notes in [id] file*/}
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}
