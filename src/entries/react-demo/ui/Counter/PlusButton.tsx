import { useExternalState } from "react-stateshape";
import { useContext } from "react";
import { AppContext } from "../AppContext/index.ts";

export const PlusButton = () => {
  let [, setState] = useExternalState(useContext(AppContext), false);

  let handleClick = () => {
    setState((state) => ({
      ...state,
      counter: state.counter + 1,
    }));
  };

  return <button onClick={handleClick}>+</button>;
};
