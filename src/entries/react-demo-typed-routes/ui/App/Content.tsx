import { Suspense } from "react";
import { useRoute } from "react-stateshape";
import { root } from "../../const/root.ts";
import { titleMap } from "../../const/titleMap.ts";
import { url } from "../../utils/url.ts";
import { About } from "../About/lazy.tsx";
import { Footer } from "../Footer/index.tsx";
import { Intro } from "../Intro/lazy.tsx";
import { Nav } from "../Nav/index.tsx";
import { Section } from "../Section/lazy.tsx";
import "./index.css";

export const Content = () => {
  let { route, at } = useRoute();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{titleMap[route.pathname]}</title>
        <link rel="stylesheet" href={`/-${root}/ui/index.css`} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <header>
          <div className="content">
            <h1>React Demo (typed routes)</h1>
            <Nav />
          </div>
        </header>
        <div className="content">
          {at(
            url("/"),
            <Suspense fallback={<p>Loading...</p>}>
              <Intro />
              <Footer />
            </Suspense>,
          )}
          {at(
            url("/about"),
            <Suspense fallback={<p>Loading...</p>}>
              <About />
              <Footer />
            </Suspense>,
          )}
          {at(url("/sections/:id"), ({ params }) => (
            <Suspense fallback={<p>Loading...</p>}>
              <Section id={params.id} />
              <Footer />
            </Suspense>
          ))}
        </div>
      </body>
    </html>
  );
};
