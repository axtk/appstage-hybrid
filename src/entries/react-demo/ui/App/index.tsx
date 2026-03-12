import { RouteProvider } from "react-stateshape";
import type { AppState } from "../../types/AppState.ts";
import { AppContext } from "../AppContext/index.ts";
import { Content } from "./Content.tsx";

export type AppProps = {
  href?: string;
  state: AppState;
};

export const App = ({ href, state }: AppProps) => (
  <RouteProvider href={href}>
    <AppContext.Provider value={state}>
      <Content />
    </AppContext.Provider>
  </RouteProvider>
);
