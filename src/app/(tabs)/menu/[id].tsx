import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      {/* adding Stack.Screen to the page selects directly ad allows access to local variables like "id" */}
      <Stack.Screen options={{ title: "Details" }} />
      <Text style={{ fontSize: 20 }}>Product details for {id} </Text>
    </View>
  );
};

export default ProductDetailsScreen;
