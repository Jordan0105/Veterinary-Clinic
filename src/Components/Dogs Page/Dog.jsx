import React, { useEffect } from "react";
import Header from "../Home Page/Header";
import anime from "animejs";

const Dog = () => {
  //TODO: Insert Home Icon instead of dog

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
      <div id="dogGrid" className="container-fluid">
        <div className="row bg-dark text-white p-5">
          <div className="col-lg d-flex justify-content-center">
            <div className="card overflow-hidden mt-3">
              <img
                src="../../../assets/images/Dogs/Chow Chow.jpg"
                className="card-img-top"
                alt="Chow Chow"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Chow Chow
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Chow Chow</span>
                  </h2>
                  <h3 className="scientificName">Tang Quan</h3>
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
                src="../../../assets/images/Dogs/Boston Terrier.jpg"
                className="card-img-top bigImagesCover"
                alt="Boston Terrier"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  BullDog
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Bulldog</span>
                  </h2>
                  <h3 className="scientificName">British Bulldog</h3>
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
                src="../../../assets/images/Dogs/Chihuahua.jpg"
                className="card-img-top"
                alt="Chihuahua"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Chihuahua
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Chihuahua</span>
                  </h2>
                  <h3 className="scientificName">The Mexican Dog</h3>
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
                src="../../../assets/images/Dogs/Dalmata.jpg"
                className="card-img-top"
                alt="Dalmatian"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Dalmatian
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Dalmatian</span>
                  </h2>
                  <h3 className="scientificName">Carriage Dog</h3>
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
                src="../../../assets/images/Dogs/Huski.jpg"
                className="card-img-top"
                alt="Siberian Husky"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Siberian Husky
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span> Siberian Husky</span>
                  </h2>
                  <h3 className="scientificName">Sled Dogs</h3>
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
                src="../../../assets/images/Dogs/Labrador Retriever.jpg"
                className="card-img-top"
                alt="Labrador Retriever"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Labrador Retriever
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Labrador Retriever</span>
                  </h2>
                  <h3 className="scientificName">Lab</h3>
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
                src="../../../assets/images/Dogs/Pastor.jpg"
                className="card-img-top"
                alt="German Shepherd"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  German Shepherd
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>German Shepherd</span>
                  </h2>
                  <h3 className="scientificName">The Alsatian Dog</h3>
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
                src="../../../assets/images/Dogs/Rough Collie.jpg"
                className="card-img-top"
                alt="Rough Collie"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Rough Collie
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Rough Collie</span>
                  </h2>
                  <h3 className="scientificName">The Scottish Collie</h3>
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
                src="../../../assets/images/Dogs/Shiba Inu.jpg"
                className="card-img-top"
                alt="Shiba Inu"
              />
              <div className="card-body d-flex justify-content-center align-items-center bg-dark">
                <h1 className="card-text text-info text-center nameHeaderAnimal">
                  Shiba Inu
                </h1>
                <div className="moreInfoCardAnimal overflow-auto position-absolute">
                  <h2 className="titleCat">
                    <span>Shiba Inu</span>
                  </h2>
                  <h3 className="scientificName">Japanese Brushwood Dog</h3>
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

export default Dog;
