import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" max-w-screen-2xl container mx-auto md:px-16 px-4 ">
        <h1 className=" font-bold text-xl">Free offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          asperiores maiores eaque doloribus vitae nemo earum non dolore nam,
          quod
        </p>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Card item={item} key={item.id} />
            ))}

          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Freebook;
