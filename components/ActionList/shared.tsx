import React from "react";
import createSlots from "@/utils/create-slots";

export type ActionListItemProps = {
  //   children?: React.ReactNode | React.ReactNode[];
  children: any;
};

export const { Slot, Slots } = createSlots(["LeadingVisual", "TrailingVisual"]);
