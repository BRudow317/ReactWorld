import React, { useState, useEffect } from "react";
//import Layout from "../themes/structure/Layout";
// import MainContainer from '../themes/MainContainer'; // Not needed here, PageLayout handles it
// import Container from '../themes/Container';         // Not needed here

export default function Home() {
  return (
    <>
      <div>
        <p>Welcome to the Miller Land Management React Application!</p>
        <p>
          This application is designed to help you manage your land assets
          efficiently and effectively.
        </p>
        <p>
          Explore the various features and tools available to streamline your
          land management tasks.
        </p>
        <div style={{ height: "2rem" }} />{" "}
        {/* A cleaner way to do line breaks */}
        <p>
          Use the navigation bar above to access different sections of the
          application.
        </p>
        <p>We hope you find this application useful and easy to navigate!</p>
      </div>
  </>
  );
}


// function ThemeToggle() {
//   // state: 'light' | 'dark' | 'system'
//   const [theme, setTheme] = useState("system");

//   useEffect(() => {
//     const root = document.documentElement; // The <html> tag

//     if (theme === "system") {
//       // Remove the manual override, let CSS @media handle it
//       root.removeAttribute("data-theme");
//     } else {
//       // Force the theme (add data-theme="dark" or "light")
//       root.setAttribute("data-theme", theme);
//     }
//   }, [theme]);

//   return (
//     <div style={{ display: "flex", gap: 10 }}>
//       <button onClick={() => setTheme("light")}>Light</button>
//       <button onClick={() => setTheme("dark")}>Dark</button>
//       <button onClick={() => setTheme("system")}>System (Auto)</button>
//     </div>
//   );
// }

// function multiLineBreak(x) {
//   return <>{Array(x).fill(<br />)}</>;
// }
