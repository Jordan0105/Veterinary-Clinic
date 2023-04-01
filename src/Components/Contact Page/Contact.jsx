import React from "react";
import Header from "../Home Page/Header";
import anime from "animejs";

const Contact = () => {
  function playAnimation(element) {
    const target = "#" + element.target.id;

    anime({
      targets: target,
      borderTopWidth: ["0px", "2px"],
      borderRightWidth: ["0px", "4px"],
      borderLeftWidth: ["0px", "4px"],
      duration: 600,
      easing: "easeInQuad",
    });
  }
  return (
    <>
      <Header />
      <div id="contactUsContainer" className="container-fluid p-5 bg-dark">
        <div className="row">
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img
              alt="Logo"
              id="logoContactUs"
              src="../../../assets/images/Logo.png"
            />
          </div>
          <div className="col-lg d-flex justify-content-center flex-column align-items-center text-light">
            <h1>Contact Us</h1>
            <form id="formContact" action="">
              <div className="mb-3 mt-3">
                <label htmlFor="fullName" className=" form-label h4 text-light">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onFocus={() => playAnimation(event)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className=" form-label h4 text-light">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onFocus={() => playAnimation(event)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="messsageText"
                  className=" form-label h4 text-light"
                >
                  Message
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="messageInput"
                  name="messageInput"
                  onFocus={() => playAnimation(event)}
                />
              </div>
              <button
                type="submit"
                id="submitForm"
                className="btn btn-outline-danger btn-lg"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg d-flex justify-content-center flex-column align-items-center px-0">
            <address>
              <h3 className="infoContactUs text-light">
                Email:{" "}
                <a href="mailto:mejiaspets@gmail.com">mejiaspets@gmail.com</a>
              </h3>
              <h3 className="infoContactUs text-light">
                Address: 957 Bryan Avenue, Saint Paul, Minnesota.
              </h3>
              <h3 className="infoContactUs text-light">
                Phone Number: <a href="tel:+1570-488-1628">570-488-1628</a>
              </h3>
              <h3 className="infoContactUs text-light">
                Fax: <a href="fax:+1 (806) 905-6421">1 (806) 905-6421</a>
              </h3>
            </address>
          </div>
          <div
            id="logoCol"
            className="col-lg d-flex justify-content-center flex-column align-items-center"
          >
            <ul
              id="logoList"
              className="list-unstyled d-flex justify-content-center"
            >
              <li className="list-inline-item">
                <a href="https://www.facebook.com/">
                  <img
                    src="../../../assets/images/Social Media/Facebook Logo.png"
                    alt="Facebook logo"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/">
                  <img
                    src="../../../assets/images/Social Media/instagram Logo.png"
                    alt="Instagram logo"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.tiktok.com">
                  <img
                    id="tikTokLogo"
                    src="../../../assets/images/Social Media/Tik Tok Logo.png"
                    alt="TikTok Logo"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com">
                  <img
                    src="../../../assets/images/Social Media/Twitter Logo.png"
                    alt="Twitter Logo"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.youtube.com/">
                  <img
                    src="../../../assets/images/Social Media/YouTube Logo.png"
                    alt="YouTube Logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

//TODO: Hover Animation Logo and the text-size
//TODO: Create a heart shadow

export default Contact;
