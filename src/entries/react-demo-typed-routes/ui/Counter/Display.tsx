import { useContext } from "react";
import { useExternalState } from "react-bridgestate";
import { HydratedOnly } from "react-clientside";
import { AppContext } from "../AppContext/index.ts";

export const Display = () => {
  let [state] = useExternalState(useContext(AppContext));

  // Using <HydratedOnly> to avoid flashing server-rendered content
  // before retrieving the counter value stored in a persistent state.
  // (Without persistence, <HydratedOnly> would be unnecessary here.)
  return (
    <strong>
      <HydratedOnly>{state.counter}</HydratedOnly>
    </strong>
  );
};
