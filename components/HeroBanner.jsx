import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { BiArrowBack, BiArrow } from 'react-icons/bi';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="relative w-full max-w-[1360px] text-[20px] text-white mx-auto">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] bottom-0 md:right-[51px] w-[30px] 
          md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center
          cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] 
          md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center
          cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <Image
            width={1200}
            height={525}
            alt="Banner"
            src="/slide-1.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white font-oswald absolute bottom-[25px] md:bottom-[75px] left-0 
          text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
          >
            Shop now
          </div>
        </div>
        <div>
          <Image
            width={1200}
            height={525}
            alt="Banner"
            src="/slide-2.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white font-oswald absolute bottom-[25px] md:bottom-[75px] left-0 
          text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
          >
            Shop now
          </div>
        </div>
        <div>
          <Image
            width={1200}
            height={525}
            alt="Banner"
            src="/slide-3.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white font-oswald absolute bottom-[25px] md:bottom-[75px] left-0 
          text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
          >
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
