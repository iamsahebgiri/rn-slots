import React, { useState } from "react";
import { View } from "react-native";

import { type ActionListItemProps, Slots } from "./shared";
import type { ForwardRefComponent } from "@/utils/polymorphic";

export const Item = React.forwardRef<View, ActionListItemProps>(
  ({ ...props }, forwardedRef): JSX.Element => {
    const [selected, setSelected] = useState(true);

    return (
      <Slots context={{ selected }}>
        {(slots) => (
          <View>
            <Text>Hello</Text>
          </View>
        )}
        {/* {(slots) => (
          <View
            ref={forwardedRef}
            style={{
              flexDirection: "row",
              padding: 12,
              gap: 12,
              backgroundColor: "red",
            }}
          >
            {slots.LeadingVisual}
            <View
              style={{
                flex: 1,
                backgroundColor: "yellow",
              }}
            >
              {props.children}
            </View>
            {slots.TrailingVisual}
          </View>
        )} */}
      </Slots>
    );
  }
) as ForwardRefComponent<"View", ActionListItemProps>;
