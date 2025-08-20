import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(data => data.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <section className="max-w-screen-xl mx-auto my-20">
      <SectionTitle subHeading={"What Our Client Say"} heading={"Testimonials"} />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(
            review => <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center m-16"><Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
                <p className="py-6">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>)
        }
      </Swiper>
    </section >
  );
};

export default Testimonials;