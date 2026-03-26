import { A } from "react-stateshape";

export const Nav = () => (
  <nav>
    <p>
      <A href="/react-demo">Intro</A>
      {" | "}
      <A href="/react-demo/about">About</A>
      {" | "}
      <A href="/react-demo/sections/1">Section 1</A>
      {" | "}
      <A href="/react-demo/sections/2">Section 2</A>
    </p>
  </nav>
);
