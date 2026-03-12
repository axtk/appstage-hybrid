import { useRoute } from "react-stateshape";
import { Suspense } from "react";
import { titleMap } from "../../const/titleMap.ts";
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
        <link rel="stylesheet" href="/-/react-demo/ui/index.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <div className="layout">
          <header>
            <h1>React Demo</h1>
            <Nav />
          </header>
          <div className="content">
            {at(
              "/react-demo",
              <Suspense fallback={<p>Loading...</p>}>
                <Intro />
                <Footer />
              </Suspense>,
            )}
            {at(
              "/react-demo/about",
              <Suspense fallback={<p>Loading...</p>}>
                <About />
                <Footer />
              </Suspense>,
            )}
            {at(/^\/react-demo\/sections\/(?<id>\d+)\/?$/, ({ params }) => (
              <Suspense fallback={<p>Loading...</p>}>
                <Section id={Number(params.id)} />
                <Footer />
              </Suspense>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
};
