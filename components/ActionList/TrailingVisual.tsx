import { Text, View } from "react-native";
import { Slot } from "./shared";

export const TrailingVisual = () => {
  return (
    <Slot name="TrailingVisual">
      {({ selected }) =>
        (
          <View
            style={{
              backgroundColor: "green",
            }}
          >
            <Text>{selected ? "Selected" : "Not selected"}</Text>
            <Text>TrailingVisual</Text>
          </View>
        ) as React.ReactNode
      }
    </Slot>
  );
};
