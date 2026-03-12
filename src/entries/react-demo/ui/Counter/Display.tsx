import { ClientOnly } from "react-clientside";
import { useExternalState } from "react-stateshape";
import { useContext } from "react";
import { AppContext } from "../AppContext/index.ts";

export const Display = () => {
  let [state] = useExternalState(useContext(AppContext));

  // Using <ClientOnly> to avoid flashing server-rendered content
  // before retrieving the store state persistent across page reloads.
  // (Without persistence, <ClientOnly> would be unnecessary here.)
  return (
    <strong>
      <ClientOnly>{state.counter}</ClientOnly>
    </strong>
  );
};
