import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import anime from "animejs";

const Header = () => {
  // const location = useLocation();
  let arrayLinks = [
    <Link
      to={"/"}
      key="1"
      id="logoListItem"
      className="nav-item navbar-brand"
      // onClick={sayHi}
    >
      <img id="logo" src="../../assets/images/Logo.png" alt="Logo" />
    </Link>,
    <Link
      to={"/dog"}
      key="2"
      className="nav-item nav-link active fs-4"
      // onClick={sayHi}
    >
      Dogs
      <i className="fa-solid fa-dog navIcon" />
    </Link>,
    <Link
      to={"/cat"}
      key="3"
      className="nav-item nav-link active fs-4"
      // onClick={sayHi}
    >
      Cats
      <i className="fa-solid fa-cat navIcon" />
    </Link>,
    <Link
      to={"/contact"}
      key="4"
      className="nav-item nav-link active fs-4"
      // onClick={sayHi}
    >
      Contact
      <i className="fa-solid fa-address-book navIcon" />
    </Link>,
    <Link
      to={"/aboutUs"}
      key="5"
      className="nav-item nav-link active fs-4"
      // onClick={sayHi}
    >
      About Us
      <i className="fa-solid fa-circle-info navIcon" />
    </Link>,
  ];

  // function sayHi() {
  //   // setTimeout(() => {
  //   const newPath = location.pathname.toLowerCase();
  //   console.log(newPath);
  //   switch (newPath) {
  //     case "/":
  //       arrayLinks = [
  //         <Link
  //           to={"/"}
  //           key="1"
  //           id="logoListItem"
  //           className="nav-item navbar-brand"
  //           onClick={sayHi}
  //         >
  //           <img id="logo" src="../../assets/images/Logo.png" alt="Logo" />
  //         </Link>,
  //         <Link
  //           to={"/dog"}
  //           key="2"
  //           className="nav-item nav-link active fs-4"
  //           onClick={sayHi}
  //         >
  //           Dogs
  //           <i className="fa-solid fa-dog navIcon" />
  //         </Link>,
  //         <Link
  //           to={"/cat"}
  //           key="3"
  //           className="nav-item nav-link active fs-4"
  //           onClick={sayHi}
  //         >
  //           Cats
  //           <i className="fa-solid fa-cat navIcon" />
  //         </Link>,
  //         <Link
  //           to={"/contact"}
  //           key="4"
  //           className="nav-item nav-link active fs-4"
  //           onClick={sayHi}
  //         >
  //           Contact
  //           <i className="fa-solid fa-address-book navIcon" />
  //         </Link>,
  //         <Link
  //           to={"/aboutUs"}
  //           key="5"
  //           className="nav-item nav-link active fs-4"
  //           onClick={sayHi}
  //         >
  //           About Us
  //           <i className="fa-solid fa-circle-info navIcon" />
  //         </Link>,
  //       ];
  //       break;
  //     case "/dog":
  //       arrayLinks[1] = (
  //         <Link
  //           to={"/"}
  //           key="2"
  //           className="nav-item nav-link active fs-4"
  //           onClick={sayHi}
  //         >
  //           Home
  //           <i className="fa-solid fa-home navIcon" />
  //         </Link>
  //       );
  //       // arrayLinks = [
  //       //   <Link
  //       //     to={"/"}
  //       //     key="1"
  //       //     id="logoListItem"
  //       //     className="nav-item navbar-brand"
  //       //     onClick={sayHi}
  //       //   >
  //       //     <img id="logo" src="../../assets/images/Logo.png" alt="Logo" />
  //       //   </Link>,
  //       //   <Link
  //       //     to={"/"}
  //       //     key="2"
  //       //     className="nav-item nav-link active fs-4"
  //       //     onClick={sayHi}
  //       //   >
  //       //     Home
  //       //     <i className="fa-solid fa-home navIcon" />
  //       //   </Link>,
  //       //   <Link
  //       //     to={"/cat"}
  //       //     key="3"
  //       //     className="nav-item nav-link active fs-4"
  //       //     onClick={sayHi}
  //       //   >
  //       //     Cats
  //       //     <i className="fa-solid fa-cat navIcon" />
  //       //   </Link>,
  //       //   <Link
  //       //     to={"/contact"}
  //       //     key="4"
  //       //     className="nav-item nav-link active fs-4"
  //       //     onClick={sayHi}
  //       //   >
  //       //     Contact
  //       //     <i className="fa-solid fa-address-book navIcon" />
  //       //   </Link>,
  //       //   <Link
  //       //     to={"/aboutUs"}
  //       //     key="5"
  //       //     className="nav-item nav-link active fs-4"
  //       //     onClick={sayHi}
  //       //   >
  //       //     About Us
  //       //     <i className="fa-solid fa-circle-info navIcon" />
  //       //   </Link>,
  //       // ];
  //       break;
  //     case "/cat":
  //       console.log("cat");
  //       break;
  //     case "/contact":
  //       console.log("contact");
  //       break;
  //     case "/aboutus":
  //       console.log("aboutus");
  //       break;
  //     default:
  //       console.log("Not found");
  //   }
  //   // }, 1);
  // }
  useEffect(() => {
    //Logo Animation
    const logoAnimation = anime({
      targets: "#logo",
      scale: [1, 1.1, 1, 1.1, 1],
      duration: 1300,
      easing: "easeInOutSine",
      direction: "alternate",
      delay: 4000,
      loop: true,
    });

    //Dog Animation

    const dogAnimation = anime({
      targets: ".fa-dog",
      translateY: [0, -10, -5, -3, 0],
      scaleY: [1, 1.1, 1.05, 0.95, 1],
      rotate: {
        value: "-360",
        delay: 4000,
        easing: "cubicBezier(.5, .05, .1, .3)",
        duration: 2200,
      },
      easing: "cubicBezier(.5, .05, .1, .3)",
      loop: true,
      duration: 5000,
      delay: 3000,
    });

    //Cat Animation

    const catAnimation = anime({
      targets: ".fa-cat",
      rotateY: 180,
      easing: "cubicBezier(.5, .05, .1, .3)",
      direction: "alternate",
      loop: true,
      duration: 1000,
      delay: 3000,
      endDelay: 3000,
    });

    //Contact Animation

    const contactAnimation = anime({
      targets: ".fa-address-book",
      keyframes: [
        {
          scale: [1, 1, 1],
          translate: [0, 0, 0],
          rotate: [-360, 0, 1, 0],
          easing: "easeOutExpo",
          duration: 0,
          autoplay: false,
        },
        {
          scale: [1, 1, 1],
          translate: [0, 0, 150],
          rotate: [-190, 0, 1, 0],
          easing: "easeOutExpo",
          duration: 600,
          autoplay: false,
        },
      ],
      loop: true,
      delay: 4000,
    });

    //About Us Animation

    const abouUsAnimation = anime({
      targets: ".fa-circle-info",
      scale: [1, 1.15, 1],
      duration: 1000,
      delay: 5000,
      loop: true,
      easing: "easeInOutSine",
    });

    return () => {
      const animationArray = [
        logoAnimation,
        dogAnimation,
        catAnimation,
        contactAnimation,
        abouUsAnimation,
      ];

      animationArray.forEach((animation) => animation.pause());
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-sm fixed-top justify-content-center">
      <div id="navContainer" className="container-fluid justify-content-center">
        <ul id="navList" className="navbar-nav align-items-center">
          {arrayLinks.map((link) => link)}
        </ul>
      </div>
    </nav>
  );
};

// Header.propTypes = {
//   arrayLinks: PropTypes.array.isRequired,
// };

export default Header;
