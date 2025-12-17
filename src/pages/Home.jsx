import React from "react";
//import Layout from "../themes/structure/Layout";
// import MainContainer from '../themes/MainContainer'; // Not needed here, PageLayout handles it
// import Container from '../themes/Container';         // Not needed here

export default function Home() {
  return (
    //<Layout>
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
    //</Layout>
  );
}

// function multiLineBreak(x) {
//   return <>{Array(x).fill(<br />)}</>;
// }
