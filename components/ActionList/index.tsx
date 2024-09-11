import { Item } from "./Item";
import { LeadingVisual } from "./LeadingVisual";
import List from "./List";
import { TrailingVisual } from "./TrailingVisual";

export const ActionList = Object.assign(List, {
  Item,
  LeadingVisual,
  TrailingVisual,
});
