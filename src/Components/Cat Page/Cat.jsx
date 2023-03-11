import React, { useEffect } from "react";
import Header from "../Home Page/Header";
import anime from "animejs";

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
    };
  }, []);
  return (
    <>
      <Header />
      <div id="catGrid" className="container-fluid">
        <div className="row bg-dark text-white p-5">
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/American Shorthair.jpg"
                className="card-img-top"
                alt="American Shorthair"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  American Shorthair
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>American Shorthair</span>
                  </h2>
                  <h3 className="scientificName">Domestic Shorthair</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/Bengal.jpg"
                className="card-img-top"
                alt="Bengal"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Bengal
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Bengal Cat</span>
                  </h2>
                  <h3 className="scientificName">Safari Cats</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/British Cat.jpg"
                className="card-img-top"
                alt="British Shorthair"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  British Shorthair
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>British Shorthair</span>
                  </h2>
                  <h3 className="scientificName">British Blue</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-dark text-white p-5">
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/Devon Rex.jpg"
                className="card-img-top"
                alt="Devon Rex"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Devon Rex
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Devon Rex</span>
                  </h2>
                  <h3 className="scientificName">Poodle Cats</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/Exotic Shorthair.jpg"
                className="card-img-top"
                alt="Exotic Shorthair"
              />
              <div className="card-body d-flex justify-content-center align-items-center d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Exotic Shorthair
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Exotic Shorthair</span>
                  </h2>
                  <h3 className="scientificName">Lazy Man&#39;s Persian</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/Ragdoll.jpg"
                className="card-img-top bigImagesCover"
                alt="Ragdoll Cat"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Ragdoll
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Ragdoll</span>
                  </h2>
                  <h3 className="scientificName">Puppy-like Cats</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-dark text-white p-5 gap-3">
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/Siamese Cat.jpg"
                className="card-img-top"
                alt="Siamese Cat"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Siamese
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Siamese</span>
                  </h2>
                  <h3 className="scientificName">Meezer</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/Turkish Angora.jpg"
                className="card-img-top"
                alt="Turkish Angora Cat"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Turkish Angora
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Turkish Angora</span>
                  </h2>
                  <h3 className="scientificName">Ankara Cat</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Cats/Sphynx.jpg"
                className="card-img-top"
                alt="Sphynx Cat"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Sphynx
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Canadian Sphynx</span>
                  </h2>
                  <h3 className="scientificName">Domestic Shorthair</h3>
                  <p className="moreInfoTxtAnimal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel sem eu tellus pulvinar tincidunt. Fusce porttitor
                    massa sapien, a ullamcorper augue tincidunt sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cat;
