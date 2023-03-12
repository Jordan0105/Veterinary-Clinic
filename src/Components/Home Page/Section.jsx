import React from "react";
import Image from "./Image";
import Text from "./Text";
import anime from "animejs";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Mousewheel } from "swiper";

const ImageSrc = {
  background1: {
    path: "../../assets/images/Home/Background 1.jpg",
    alt: "A Cat",
  },
  background2: {
    path: "../../assets/images/Home/Background 2.jpg",
    alt: "",
  },
  background3: {
    path: "../../assets/images/Home/Background 3.jpg",
    alt: "",
  },
  background4: {
    path: "../../assets/images/Home/Background 4.jpg",
    alt: "",
  },
  background5: {
    path: "../../assets/images/Home/Background 5.jpg",
    alt: "",
  },
  background6: {
    path: "../../assets/images/Home/Background 6.jpg",
    alt: "",
  },
  background7: {
    path: "../../assets/images/Home/Background 7.jpg",
    alt: "",
  },
};

const Section = () => {
  return (
    <>
      <Swiper
        //* Start the animation of the first slider initialized

        onInit={swiper => {
          anime({
            targets: "#firstInit",
            translateX: "20vw",
            loop: false,
            duration: 1000, //200
            delay: 2000,

            //* You can't scroll until the text animations is finished

            begin: () => {
              swiper.mousewheel.disable();
              swiper.pagination.disable();
            },
          });

          anime({
            targets: ".firstInitialized",
            translateX: "20vw",
            loop: false,
            duration: 1000, //200

            delay: function (el, i, l) {
              return (i + 10) * 300;
            },

            //* When the animation is completed you can scroll again

            complete: () => {
              swiper.mousewheel.enable();
              swiper.pagination.enable();
              swiper.allowTouchMove = true;

              //* Bullets animation

              anime({
                targets: ".swiper-pagination-bullet",
                opacity: [0, 1],
                duration: 3000,
              });
            },
          });

          // TODO: Create  a loading screen
        }}
        //* When you are on the first slide for the first time

        onTransitionStart={swiper => {
          swiper.mousewheel.disable();
          swiper.pagination.disable();
        }}
        //* Every time when the slide changes

        onSlideChange={swiper => {
          //* This gets the previous slide
          console.clear();
          swiper.allowTouchMove = false;
          const previousSlide = document.getElementsByClassName(
            "swiper-slide-active"
          )[0].childNodes[1].childNodes;

          //* Get the text of the current slide

          const firstTextCurrentSlide =
            swiper.slides[swiper.activeIndex].childNodes[1].childNodes[0];

          //* Get the text of the next slide

          const nextTextCurrentSlide = Array.from(
            swiper.slides[swiper.activeIndex].childNodes[1].childNodes
          );

          //* Delete the first text of every slide

          const slicedArray = nextTextCurrentSlide.slice(1);
          //* Animate the text

          anime({
            targets: [previousSlide, ".list-group-item .textSliderSection"],
            translateX: "0vw",
            loop: false,
            duration: 1,
          });

          //* If we are on the 3 slide then we delete the first text and we take only the text inside the table

          if (swiper.activeIndex === 3) {
            slicedArray.pop();

            anime({
              targets: [slicedArray, ".list-group-item .servicesBox"],
              translateX: "20vw",
              loop: false,
              duration: 1000, //200
              delay: function (el, i, l) {
                return i * 100;
              },
              complete: () => {
                swiper.mousewheel.enable();
                swiper.pagination.enable();
                swiper.allowTouchMove = true;

                //* Bullets animation

                anime({
                  targets: ".swiper-pagination-bullet",
                  opacity: [0, 1],
                  duration: 3000,
                });
              },
              // delay: anime.stagger(300, { easing: "easeOutQuad" }),
            });
          }

          //* If we are on the 3 slide then we delete the first text and we take only the text inside the table
          else if (swiper.activeIndex === 4) {
            slicedArray.pop();

            anime({
              targets: [slicedArray, ".list-group-item .specialistBox"],
              translateX: "20vw",
              loop: false,
              duration: 1000, //200

              delay: function (el, i, l) {
                return i * 100;
              },

              complete: function () {
                swiper.mousewheel.enable();
                swiper.pagination.enable();
                swiper.allowTouchMove = true;

                //* Bullets animation

                anime({
                  targets: ".swiper-pagination-bullet",
                  opacity: [0, 1],
                  duration: 3000,
                });
              },
            });
          }

          //* If we are on the rest of slides (no table)
          else {
            anime({
              targets: slicedArray,
              translateX: "20vw",
              loop: false,
              duration: 3000, //200

              delay: function (el, i, l) {
                return (i + 1) * 500;
              },
              complete: function () {
                swiper.mousewheel.enable();
                swiper.pagination.enable();
                swiper.allowTouchMove = true;

                //* Bullets animation

                anime({
                  targets: ".swiper-pagination-bullet",
                  opacity: [0, 1],
                  duration: 3000,
                });
              },
            });
          }
          anime({
            targets: firstTextCurrentSlide,
            translateX: "20vw",
            loop: false,
            duration: 1000, //200
            delay: 300,
          });
        }}
        direction={"vertical"}
        allowTouchMove={false}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={ImageSrc.background1.path}
            alt={ImageSrc.background1.alt}
          />
          <Text>
            <h1
              id="firstInit"
              className="firstTextSliderSection textSliderResponsive container-sm"
            >
              A pet is a friend
            </h1>
            <h1 className="textSliderSection firstInitialized textSliderResponsive container-sm">
              Is our responsability to take
            </h1>
            <h1 className="textSliderSection firstInitialized textSliderResponsive container-sm">
              the best cares for them
            </h1>
            <br />
            <h1 className="textSliderSection firstInitialized textSliderResponsive container-sm">
              And you will find all that
            </h1>
            <h1 className="textSliderSection firstInitialized textSliderResponsive container-sm">
              Just over here
            </h1>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ImageSrc.background2.path}
            alt={ImageSrc.background2.alt}
          />
          <Text>
            <h1 className="firstTextSliderSection textSliderResponsive container-sm">
              A cat means a lot of things
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              They even were ancient gods{" "}
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              in the ancient Egypt!
            </h1>
            <br />
            <h1 className="textSliderSection textSliderResponsive container-sm">
              In Mejia&#39;s Pets we will provide
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              to your cats the best cares ever
            </h1>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ImageSrc.background3.path}
            alt={ImageSrc.background3.alt}
          />
          <Text>
            <h1 className="firstTextSliderSection textSliderResponsive container-sm">
              A dog means a lot
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              Not only they are considered
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              the best friend on men
            </h1>
            <br />
            <h1 className="textSliderSection textSliderResponsive container-sm">
              They take care of us and
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              We have to take care of them
            </h1>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ImageSrc.background4.path}
            alt={ImageSrc.background4.alt}
          />
          <Text>
            <h1 className="firstTextSliderSection textSliderResponsive container-sm">
              In Mejia&#39;s Pets you&#39;ll find <br />
            </h1>

            <br />
            <ul className="list-group textSliderResponsive container-sm">
              <li className="list-group-item">
                <h1 className="textSliderSection servicesBox">Food</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection servicesBox">
                  Medicine Supply
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection servicesBox">Toys</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection servicesBox">Surgeries</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection servicesBox">Diagnoses</h1>
              </li>
            </ul>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ImageSrc.background5.path}
            alt={ImageSrc.background5.alt}
          />
          <Text>
            <h1 className="firstTextSliderSection textSliderResponsive container-sm">
              Your pet is in good hands...
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              with our qualified veterinarian
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              specialists in:
            </h1>
            <br />

            <ul className="list-group textSliderResponsive container-sm">
              <li className="list-group-item">
                <h1 className="textSliderSection specialistBox">
                  Pharmacology
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection specialistBox">Nutriology</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection specialistBox">Surgery</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection specialistBox">Radiology</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection specialistBox">
                  Microbiology
                </h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection specialistBox">& more</h1>
              </li>
            </ul>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ImageSrc.background6.path}
            alt={ImageSrc.background6.alt}
          />
          <Text>
            <h1 className="firstTextSliderSection textSliderResponsive container-sm">
              With our specialists
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              you don&#39;t have to worry about
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              the health of your pet,
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              no matter how delicate
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              the problem may be,
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              we will take care and we&#39;ll handle it
            </h1>
            <h1 className="textSliderSection textSliderResponsive container-sm">
              in the best possible way
            </h1>
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ImageSrc.background7.path}
            alt={ImageSrc.background7.alt}
          />
          <Text>
            <h1 className="firstTextSliderSection textSliderResponsive container-sm">
              Feeding our pets is one of the <br /> most important things.
            </h1>
            {/* <br /> */}
            <h1 className="textSliderSection textSliderResponsive container-sm">
              Their health depends on <br />
              how well they are fed.
            </h1>
            {/* <br /> */}
            <h1 className="textSliderSection textSliderResponsive container-sm">
              Your pets deserve a <br />
              healthy and nutritious diet.
            </h1>
            {/* <br /> */}
            <h1 className="textSliderSection textSliderResponsive container-sm">
              You will find the best nutritionists <br />
              only here at:
            </h1>
          </Text>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Section;
