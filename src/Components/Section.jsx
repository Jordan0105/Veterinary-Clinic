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
        onInit={() => {
          //Start the animation of the first slider initialized

          anime({
            targets: "#firstInit",
            translateX: "20vw",
            loop: false,
            duration: 1000, //200
            delay: 2000,
          });

          anime({
            targets: ".firstInitialized",
            translateX: "20vw",
            loop: false,
            duration: 1000, //200
            delay: function (el, i, l) {
              return (i + 10) * 300;
            },
          });

          //TODO: Create  a loading screen
        }}
        onSlideChange={(swiper) => {
          //* This shows the previous slide

          const previousSlide = document.getElementsByClassName(
            "swiper-slide-active"
          )[0].childNodes[1].childNodes;

          //*This shows the currently slider

          const firstTextCurrentSlide =
            swiper.slides[swiper.activeIndex].childNodes[1].childNodes[0];

          const nextTextCurrentSlide = Array.from(
            swiper.slides[swiper.activeIndex].childNodes[1].childNodes
          );
          const slicedArray = nextTextCurrentSlide.slice(1);
          // Bug: The animation got

          anime({
            targets: [previousSlide, ".list-group-item .textSliderSection"],
            translateX: "0vw",
            loop: false,
            duration: 1,
          });

          if (swiper.activeIndex === 3 || swiper.activeIndex === 4) {
            // console.log(slicedArray);
            slicedArray.pop();
            anime({
              targets: [slicedArray, ".list-group-item .textSliderSection"],
              translateX: "20vw",
              loop: false,
              duration: 1000, //200
              delay: function (el, i, l) {
                return (i + 1) * 500;
              },
              // delay: anime.stagger(300, { easing: "easeOutQuad" }),
            });
          } else {
            anime({
              targets: slicedArray,
              translateX: "20vw",
              loop: false,
              duration: 1000, //200
              delay: function (el, i, l) {
                return (i + 1) * 500;
              },
              // delay: anime.stagger(300, { easing: "easeOutQuad" }),
            });
          }

          // anime({
          //   targets: ["#firstInit", ".firstInitialized"],
          //   translateX: "0vw",
          //   loop: false,
          //   duration: 1, //200
          // });

          anime({
            targets: firstTextCurrentSlide,
            translateX: "20vw",
            loop: false,
            duration: 1000, //200
            delay: 300,
          });
        }}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={ImageSrc.background1.path}
            alt={ImageSrc.background1.alt}
          />
          <Text>
            <h1 id="firstInit" className="firstTextSliderSection container-sm">
              A pet is a friend
            </h1>
            <h1 className="textSliderSection firstInitialized container-sm">
              Is our responsability to take
            </h1>
            <h1 className="textSliderSection firstInitialized container-sm">
              the best cares for them
            </h1>
            <br />
            <h1 className="textSliderSection firstInitialized container-sm">
              And you will find all that
            </h1>
            <h1 className="textSliderSection firstInitialized container-sm">
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
            <h1 className="firstTextSliderSection container-sm">
              A cat means a lot of things
            </h1>
            <h1 className="textSliderSection container-sm">
              They even were ancient gods{" "}
            </h1>
            <h1 className="textSliderSection container-sm">
              in the ancient Egypt!
            </h1>
            <br />
            <h1 className="textSliderSection container-sm">
              In Mejia&#39;s Pets we will provide
            </h1>
            <h1 className="textSliderSection container-sm">
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
            <h1 className="firstTextSliderSection container-sm">
              A dog means a lot
            </h1>
            <h1 className="textSliderSection container-sm">
              Not only they are considered
            </h1>
            <h1 className="textSliderSection container-sm">
              the best friend on men
            </h1>
            <br />
            <h1 className="textSliderSection container-sm">
              They take care of us and
            </h1>
            <h1 className="textSliderSection container-sm">
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
            <h1 className="firstTextSliderSection container-sm">
              In Mejia&#39;s Pets you&#39;ll find <br />
            </h1>

            <br />
            <ul className="list-group container-sm">
              <li className="list-group-item">
                <h1 className="textSliderSection">Food</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">Medicine Supply</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">Toys</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">Surgeries</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">Diagnoses</h1>
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
            <h1 className="firstTextSliderSection container-sm">
              Your pet is in good hands...
            </h1>
            <h1 className="textSliderSection container-sm">
              with our qualified veterinarian
            </h1>
            <h1 className="textSliderSection container-sm">specialists in:</h1>
            <br />

            <ul className="list-group container-sm">
              <li className="list-group-item">
                <h1 className="textSliderSection">Pharmacology</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">Nutriology</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">Surgery</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">Radiology</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">Microbiology</h1>
              </li>
              <li className="list-group-item">
                <h1 className="textSliderSection">& more</h1>
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
            <h1 className="firstTextSliderSection container-sm">
              With our specialists
            </h1>
            <h1 className="textSliderSection container-sm">
              you don&#39;t have to worry about
            </h1>
            <h1 className="textSliderSection container-sm">
              the health of your pet,
            </h1>
            <h1 className="textSliderSection container-sm">
              no matter how delicate
            </h1>
            <h1 className="textSliderSection container-sm">
              the problem may be,
            </h1>
            <h1 className="textSliderSection container-sm">
              we will take care and we&#39;ll handle it
            </h1>
            <h1 className="textSliderSection container-sm">
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
            <h1 className="firstTextSliderSection container-sm">
              Feeding our pets is one of the <br /> most important things.
            </h1>
            <br />
            <h1 className="textSliderSection container-sm">
              Their health depends on <br />
              how well they are fed.
            </h1>
            <br />
            <h1 className="textSliderSection container-sm">
              Your pets deserve a <br />
              healthy and nutritious diet.
            </h1>
            <br />
            <h1 className="textSliderSection container-sm">
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
