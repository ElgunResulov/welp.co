import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper stil fayllarını import etmək vacibdir
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

interface DataXususiyyetleri {
  photo: string;
  title: string;
  description: string;
}

const Cards: React.FC = () => {
  const [melumatlar, setMelumatlar] = useState<DataXususiyyetleri[]>([]);

  useEffect(() => {
    // Axios sorğusu. Cavabın bir massiv olduğunu qəbul edirik.
    // Əgər cavab `{"data": [...]}` kimi gəlirsə, setMelumatlar(cavab.data.data) yazılmalıdır.
    axios
      .get("./data/salam.json")
      .then(cavab => {
        // Cavabın bir massiv olduğunu yoxlayırıq.
        if (Array.isArray(cavab.data)) {
          setMelumatlar(cavab.data);
        } else {
          // Əgər cavab massiv deyilsə, boş massiv təyin edirik ki, proqram xəta verməsin.
          console.error("Serverdən gələn məlumat massiv deyil:", cavab.data);
          setMelumatlar([]);
        }
      })
      .catch(xeta => {
        console.log("Məlumat gətirilərkən xəta baş verdi:", xeta);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {melumatlar.map((birMelumat, index) => (
            // Hər SwiperSlide-a unikal key veririk
            <SwiperSlide key={index}>
              <Card
                shekil={birMelumat.photo}
                mukafatinAdi={birMelumat.title}
                mukafatinMetni={birMelumat.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cards