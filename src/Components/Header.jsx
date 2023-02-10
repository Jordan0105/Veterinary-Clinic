import React, { useEffect } from "react";
import anime from "animejs";

const Header = () => {
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
          <li id="logoListItem" className="nav-item">
            <a className="navbar-brand">
              <img id="logo" src="../../assets/images/Logo.png" alt="Logo" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active fs-4" href="#">
              Dogs
              <i className="fa-solid fa-dog navIcon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active fs-4" href="#">
              Cats
              <i className="fa-solid fa-cat navIcon"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link active fs-4" href="#">
              Contact
              <i className="fa-solid fa-address-book navIcon"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link active fs-4" href="#">
              About Us
              <i className="fa-solid fa-circle-info navIcon"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
