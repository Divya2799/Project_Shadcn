import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }
    return (
        <Slider {...settings} className="w-[90vw]">
            <div className="bg-amber-500 p-4 text-center">
                <h3>1</h3>
            </div>
            <div className="bg-amber-500 p-4 text-center">
                <h3>2</h3>
            </div>
            <div className="bg-amber-500 p-4 text-center">
                <h3>3</h3>
            </div>
            <div className="bg-amber-500 p-4 text-center">
                <h3>4</h3>
            </div>
            <div className="bg-amber-500 p-4 text-center">
                <h3>5</h3>
            </div>
            <div className="bg-amber-500 p-4 text-center">
                <h3>6</h3>
            </div>
        </Slider>
    );
}
export { SimpleSlider};