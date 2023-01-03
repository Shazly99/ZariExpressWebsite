import React from 'react'
import Slider from 'react-slick';
import Img from '../../assets/Img';
import './Slider.scss'
function SliderExpress() {
    const imageSlider = [
        { url: Img.Header },
        { url: Img.Header1 },
        { url: Img.Header2 },
    ]
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='overflow-hidden' id='home'>
            <Slider {...settings} >
                {
                    imageSlider.map((img, index) => {
                        return (
                            <div key={index}>
                                <img src={img.url} className='w-100  ' />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default SliderExpress