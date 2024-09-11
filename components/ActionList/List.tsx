import { View, Text } from "react-native";
import React from "react";

interface ActionListProps {
  children: React.ReactNode | React.ReactNode[];
}

const List = ({ children }: ActionListProps) => {
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 12
      }}
    >
      {children}
    </View>
  );
};

List.displayName = "List";

export default List;
