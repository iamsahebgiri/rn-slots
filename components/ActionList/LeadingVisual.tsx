import { Text, View } from "react-native";
import { Slot } from "./shared";

export const LeadingVisual = () => {
  return (
    <Slot name="LeadingVisual">
      {({ selected }) => (
        <View style={{
            backgroundColor: "blue"
        }}>
          <Text>{selected ? "Selected" : "Not selected"}</Text>
          <Text>LeadingVisual</Text>
        </View>
      )}
    </Slot>
  );
};
