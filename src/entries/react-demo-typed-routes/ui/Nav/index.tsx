import { A } from "react-stateshape";
import { url } from "../../utils/url.ts";

export const Nav = () => (
  <nav>
    <p>
      <A href={url("/")}>Intro</A>
      {" | "}
      <A href={url("/about")}>About</A>
      {" | "}
      <A href={url("/sections/:id", { params: { id: 1 } })}>Section 1</A>
      {" | "}
      <A href={url("/sections/:id", { params: { id: 2 } })}>Section 2</A>
    </p>
  </nav>
);
