import { ActionList } from "@/components/ActionList";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <ActionList>
        <ActionList.Item>
          <ActionList.LeadingVisual />
          <ActionList.TrailingVisual />
          <Text>Item 1</Text>
        </ActionList.Item>
        <ActionList.Item>
          <ActionList.TrailingVisual />
          <ActionList.LeadingVisual />
          <Text>Item 1</Text>
        </ActionList.Item>
      </ActionList>
    </ScrollView>
  );
}
