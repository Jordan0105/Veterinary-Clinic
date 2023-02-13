import React, { useEffect } from "react";
import Header from "../Home Page/Header";
import anime from "animejs";
// import { arrayLinks } from "../Home Page/Home";
// import { Link } from "react-router-dom";

const Cat = () => {
  useEffect(() => {
    const cards = document.getElementsByClassName("card");
    for (const iterator of cards) {
      iterator.style.transform = "scale(0)";
    }
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
      <div id="catGrid" className="container-fluid">
        <div className="row bg-dark text-white p-5">
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Cats/American Shorthair.jpg"
                className="card-img-top chowChow"
                alt="American Shorthair"
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
                src="../../../assets/images/Cats/Bengal.jpg"
                className="card-img-top bullDog"
                alt="Bengal"
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
                src="../../../assets/images/Cats/British Cat.jpg"
                className="card-img-top"
                alt="British Cat"
              />
              <div className="card-body bg-dark">
                <h1 className="card-text text-info text-center">British Cat</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-dark text-white p-5">
          <div className="col-lg d-flex justify-content-center">
            <div className="card">
              <img
                src="../../../assets/images/Cats/Devon Rex.jpg"
                className="card-img-top"
                alt="Devon Rex"
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
                src="../../../assets/images/Cats/Exotic Shorthair.jpg"
                className="card-img-top"
                alt="Exotic Shorthair"
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
                src="../../../assets/images/Cats/Ragdoll.jpg"
                className="card-img-top"
                alt="Ragdoll Cat"
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
                src="../../../assets/images/Cats/Siamese Cat.jpg"
                className="card-img-top"
                alt="Siamese Cat"
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
                src="../../../assets/images/Dogs/Turkish Angora.jpg"
                className="card-img-top"
                alt="Turkish Angora Cat"
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
                src="../../../assets/images/Cats/Sphynx.jpg"
                className="card-img-top"
                alt="Sphynx Cat"
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

export default Cat;
