import React from "react";
// import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const Freebook = () => {
  const [freeBook, setFreeBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mernbackend-1-6o0z.onrender.com/book")
      .then((res) => {
        // console.log(res.data)
        setFreeBook(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Error getting book: ${err.message}`);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
    ],
  };

  const freeBooks = freeBook.filter((book) => {
    return book.category === "free";
  });

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mb-3">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free offered Books</h1>
          <p>
            Welcome to the Freebook section of Apni Library! Here, you can
            access a curated selection of books available for free download.
            From classic literature to contemporary works, our Freebook
            collection is designed to provide you with high-quality reads at no
            cost. Enjoy the pleasure of reading without any barriers. Explore,
            download, and dive into a world of free knowledge and entertainment
            today!
          </p>
        </div>
        <div className="slider-container my-5 mx-5">
          {isLoading ? (
            <Loading />
          ) : (
            <Slider {...settings}>
              {freeBooks.map((item) => {
                return <Cards info={item} key={item.id} />;
              })}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default Freebook;
