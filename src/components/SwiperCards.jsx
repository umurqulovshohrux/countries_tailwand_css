import React, { useRef } from 'react'
import { CiCircleChevRight } from "react-icons/ci"
import { CiCircleChevLeft } from "react-icons/ci";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Mousewheel, Navigation } from "swiper/modules";

const images = [
    {
        id: 1,
        title: 'Cyber Kongz',
        img: '/card1.png',
        count: '5000.22 ETH '
    },
    {
        id: 2,
        title: 'Bulls TheBlock',
        img: '/card2.png',
        count: '4050.22 ETH '
    },
    {
        id: 3,
        title: 'Curio.Cards',
        img: '/card3.png',
        count: '36220.22 ETH '
    },
    {
        id: 4,
        title: 'The Sandbox',
        img: '/card4.png',
        count: '3421.22 ETH '
    },
    {
        id: 5,
        title: 'Cyber Kongz',
        img: '/card1.png',
        count: '5000.22 ETH '
    },
    {
        id: 6,
        title: 'Bulls TheBlock',
        img: '/card2.png',
        count: '4050.22 ETH '
    },
    {
        id: 7,
        title: 'Curio.Cards',
        img: '/card3.png',
        count: '36220.22 ETH '
    },
    {
        id: 8,
        title: 'The Sandbox',
        img: '/card4.png',
        count: '3421.22 ETH '
    }

]
export default function SwiperCards() {

    const swiperRef = useRef(null);
    return (
        <div>
            <div className="mb-3 flex justify-between">
                <h1 className="text-[20px] font-bold">Trending</h1>
                <div className="flex">
                    <CiCircleChevLeft
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                        className="text-4xl text-blue-500 font-bold"
                    />
                    <CiCircleChevRight
                        onClick={() => swiperRef.current.swiper.slideNext()}
                        className="text-4xl text-blue-500 font-bold"
                    />
                </div>
            </div>


            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                }}
                mousewheel={true}
                modules={[Mousewheel, Navigation]}
                className='mySwiper'
            >
                {images.map((item) => {
                    return (
                        <SwiperSlide key={item.id} className="w-[196px] h-[95px]  relative mb-4 rounded-lg">
                            <img className="w-full h-full object-cover rounded-lg" src={item.img} alt="" />

                            <div className="absolute w-full h-full bg-black bg-opacity-50   top-0 text-white flex justify-center items-center">
                                <div className="text-center  z-40">
                                    <h2 className="text-sm font-bold ">{item.title}</h2>
                                    <p className="text-sm ">
                                        <span className="font-extralight"> {item.count.split("")[0]}</span>{item.count.split("")[1]}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>


    )

}