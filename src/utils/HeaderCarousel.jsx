import React from "react";
import Slider from "react-slick";

function HeaderCarousel() {
  const settings = {
        dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000

  };
        
  return (
    <div className="slider-contain overflow-hidden">
      <Slider {...settings}>
        <div className='p-1'>
          <img className="w-full h-[80vh] object-cover " src="https://img.freepik.com/free-photo/team-developers-doing-brainstorming-optimizing-code_482257-112972.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740" alt="" />
        </div>
        <div className='p-1'>
          <img className="w-full h-[80vh] object-cover " src="https://img.freepik.com/premium-photo/skilled-business-team-discussion-about-start-up-project-office-tracery_31965-300129.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740" alt="" />
        </div>
        <div className='p-1'>
          <img className="w-full h-[80vh] object-cover " src="https://img.freepik.com/premium-photo/young-programmers-working-new-project-start-up-business_1074916-3741.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740" alt="" />
        </div>
        <div className='p-1'>
          <img className="w-full h-[80vh] object-cover " src="https://img.freepik.com/premium-photo/young-programmers-working-office_392895-106477.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740" alt="" />
        </div>
        <div className='p-1'>
          <img className="w-full h-[80vh] object-cover " src="https://img.freepik.com/premium-photo/young-multiethnics-business-team-software-developers-working-together-using-laptop-computer-while-writing-programming-code-modern-startup-office_530697-170.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740" alt="" />
        </div>
        <div className='p-1'>
          <img className="w-full h-[80vh] object-cover " src="https://img.freepik.com/free-photo/group-businesspeople-using-laptop-while-working-document_23-2147838546.jpg?uid=R185271760&ga=GA1.1.2114736879.1740217972&semt=ais_hybrid&w=740" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default HeaderCarousel;