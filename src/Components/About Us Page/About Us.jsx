import React from "react";
import Header from "../Home Page/Header";

const AboutUS = () => {
  return (
    <>
      <Header />

      <div id="aboutUsContainer" className="container-fluid p-5 bg-dark">
        <div className="row pt-5 justify-content-center">
          <div className="col-lg w-auto d-flex justify-content-center align-items-center">
            <img
              id="logoContactUs"
              src="../../../assets/images/Logo.png"
              alt="Logo Mejia's Pets"
            />
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center flex-column text-light">
            <div className="col d-flex justify-content-center align-items-center">
              <h1>Who we are?</h1>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <p className="fs-5 fst-italic">
                We are a veterinary clinic born in 2004 by the Mejía Aráuz
                family.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded "
              src="../../../assets/images/About Us/Image 1.jpg"
              alt="Team Mejia's Pets"
            />
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center flex-column text-light">
            <div className="col d-flex justify-content-center align-items-center">
              <h1>We have the best specialists from all over the country</h1>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <p className="fs-5 fst-italic">
                With a total of more than 2,000 employees, clinics everywhere
                and the best conditions so that your pet is in the best hands.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5  text-light">
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded "
              src="../../../assets/images/About Us/Image 2.jpg"
            />
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center flex-column">
            <div className="col d-flex justify-content-center align-items-center">
              <h1>With the latest technology</h1>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <p className="fs-5 fst-italic">
                We have the most innovative and updated technology providing
                your pet with the best security. We have a wide range of
                medicines, supplements, vitamins and dewormers so that your pet
                is as healthy as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5  text-light">
          <div className="col-lg d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded "
              src="../../../assets/images/About Us/Image 3.jpeg"
              alt="Team Mejia's Pets"
            />
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center flex-column">
            <div className="col d-flex justify-content-center align-items-center">
              <h1>Thanks for trusting us!</h1>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <p className="fs-5 fst-italic">
                From Mejia&#39;s Pets, our entire team would like to thank you
                for choosing the best veterinary clinic in the country, without
                a doubt your pet will appreciate it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
