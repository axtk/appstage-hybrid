import { A, useRoute } from "react-stateshape";

export const Nav = () => {
  let { at } = useRoute();

  return (
    <nav>
      <p>
        {at("/react-demo", <span>Intro</span>, <A href="/react-demo">Intro</A>)}
        {" | "}
        {at("/react-demo/about", <span>About</span>, <A href="/react-demo/about">About</A>)}
        {" | "}
        {at(
          "/react-demo/sections/1",
          <span>Section 1</span>,
          <A href="/react-demo/sections/1">Section 1</A>,
        )}
        {" | "}
        {at(
          "/react-demo/sections/2",
          <span>Section 2</span>,
          <A href="/react-demo/sections/2">Section 2</A>,
        )}
      </p>
    </nav>
  );
};
