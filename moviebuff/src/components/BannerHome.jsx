import React from 'react';
import { useSelector } from 'react-redux';

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);

  console.log('Banner Home Data:', bannerData);

  return (
    <section className="w-full h-full overflow-hidden">
      <div className="flex min-h-full max-h-[95vh]">
        {bannerData.map((data, index) => (
          <div
            key={index}
            className="min-w-full h-[450px] sm:h-[600px] md:h-[700px] lg:h-full overflow-hidden relative"
          >
            <div className="h-full w-full">
              <img
                className="h-full w-full object-cover"
                src={imageURL + data.backdrop_path}
                alt="movie"
              />
            </div>
             <div className='absolute top-0 bg-gradient-to-t from-neutral-900 to-transparent  w-full h-full'>

             </div>
             <div className='container mx-auto'>

             <div className='w-full absolute bottom-0 max-w-md px-3'>
                  <h2 className='font-bold text-3xl lg:text-4xl text-white drop-shadow-3xl'>
                {data.title}
                    
                  </h2>
                  <p className='text-ellipsis line-clamp-3 my-3'>{data.overview}</p>
                  <div className='flex items-center gap-4'>
                    <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>  <p>|</p>
                    <p>Views : {Number(data.popularity).toFixed(0)}</p>
                  </div>

                  <button className='bg-white px-4 hover:bg-gradient-to-l from-red-600 to-orange-400 transition-all shadow-md hover:scale-105  rounded my-3 py-3 text-black font-bold '>
                    Play Now
                  </button>
             </div>

             </div>


          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerHome;
