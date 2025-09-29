import React from "react";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import Navbar from "./components/Navbar";
// import { createBrowserRouter, RouterProvider } from "react-router";

export default function App() {
  //   let NoteRoute = createBrowserRouter([
  //     {
  //       path: "/note",
  //       Component: <NotesApp />,
  //       loader: loadRootData,
  //     },
  //     {
  //       path: "/note",
  //       Component: <NotesApp />,
  //       loader: loadRootData,
  //     }
  //   ]);

  const [page, setPage] = useState("/");

  const handleNavigation = (target) => {
    setPage(target);
  };

  return (
    <>
        <header>
          <nav>
            <ul>
              <li>
                <Navbar target="/" navigate={handleNavigation}>
                  Home 
                </Navbar>
              </li>
              <li>
                <Navbar target="/about" navigate={handleNavigation}>
                  About
                </Navbar>
              </li>
              <li>
                <Navbar target="/faq" navigate={handleNavigation}>
                    FAQ
                </Navbar>
              </li>
            </ul>
          </nav>
        </header>
      <main>
        {page === "/" && <HomePage />}
        {page === "/about" && <AboutPage />}
        {page === "/faq" && <FAQPage />}
      </main>
    </>
  );
}

{
  /* <RouterProvider router={[NoteRoute, ]} /> */
}
