import useBanner from "../../Hooks/useBanner";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    const [banners] = useBanner();

    return (
        <div className="">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    banners.map(banner => (
                        <SwiperSlide key={banner._id}
                            banner={banner}
                        >
                            <img src={banner.image_url} alt="banner image" className="h-[50vh] md:h-[80vh] w-full "/>

                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    );
};

export default Banner;