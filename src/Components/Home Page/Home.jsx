import React from "react";
import Header from "./Header";
import Section from "./Section";
import LoadingPage from "./Loading Page";

const Home = () => {
  return (
    <div id="homeContainer">
      <Header />
      <Section />
    </div>
  );
};

export default Home;

// return (
//   <div id="homeContainer">
//     {componentLoaded ? (
//       <>
//         <Header />
//         <Section
//           onLoad={() => {
//             setComponentLoaded(true);
//           }}
//         />
//       </>
//     ) : (
//       <LoadingPage />
//     )}
//   </div>
// );
