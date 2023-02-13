import React, { useEffect } from "react";
import Header from "../Home Page/Header";
import anime from "animejs";
// import { arrayLinks } from "../Home Page/Home";
// import { Link } from "react-router-dom";

const Dog = () => {
  //TODO: Insert Home Icon instead of dog
  // arrayLinks[1] = (
  //   <Link to={"/"} key="2" className="nav-item nav-link active fs-4">
  //     Home
  //     <i className="fa-solid fa-house navIcon" />
  //   </Link>
  // );

  useEffect(() => {
    const cards = document.getElementsByClassName("card");
    for (const iterator of cards) {
      iterator.style.transform = "scale(0)";
    }
    // arrayLinks[1] = (
    //   <Link to={"/dog"} key="2" className="nav-item nav-link active fs-4">
    //     Dogs
    //     <i className="fa-solid fa-dog navIcon" />
    //   </Link>
    // );
    anime({
      targets: ".card ",
      scale: [{ value: 1, easing: "easeInOutQuad", duration: 1200 }],
      delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
    });
    return () => {
      console.log("Dog desmontado");
      // console.log(arrayLinks[1].props.children[1].props.className);
    };
  }, []);

  return (
    <>
      <Header />
      <div id="dogGrid" className="container-fluid">
        <div className="row bg-dark text-white p-5">
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Chow-Chow.jpg"
                className="card-img-top chowChow"
                alt="Chow-Chow"
              />
              <div className="card-body bg-dark">
                <p className="card-text text-info h4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Bull Dog.jpg"
                className="card-img-top bullDog"
                alt="Bull Dog"
              />
              <div className="card-body bg-dark">
                <p className="card-text text-info h4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Chihuahua.jpg"
                className="card-img-top"
                alt="Chihuahua"
              />
              <div className="card-body bg-dark">
                <h1 className="card-text text-info text-center">Chihuahua</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-dark text-white p-5">
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Dalmata.jpg"
                className="card-img-top"
                alt="Dalmata"
              />
              <div className="card-body bg-dark">
                <p className="card-text text-info h4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Huski.jpg"
                className="card-img-top"
                alt="Huski"
              />
              <div className="card-body bg-dark">
                <p className="card-text text-info h4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Labrador Retriever.jpg"
                className="card-img-top"
                alt="Labrador Retriever"
              />
              <div className="card-body bg-dark">
                <p className="card-text text-info h4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-dark text-white p-5">
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Pastor.jpg"
                className="card-img-top"
                alt="Pastor"
              />
              <div className="card-body bg-dark">
                <p className="card-text text-info h4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Rough Collie.jpg"
                className="card-img-top"
                alt="Rough Collie"
              />
              <div className="card-body bg-dark">
                <p className="card-text text-info h4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Dogs/Shiba Inu.jpg"
                className="card-img-top"
                alt="Shiba Inu"
              />
              <div className="card-body bg-dark">
                <p className="card-text text-info h4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dog;
