import React from "react";
import { Link } from "react-router-dom";

export default function TopSection() {
  return (
    <section className='text-gray-600 body-font'>
      <video className='aspect-video w-full' loop autoPlay muted>
        <source
          src='Epic_Adidas_shoe_commercial_concept_product-video_B_ROLL.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>
      <figcaption
        className='w-full p-4 bg-white flex flex-col justify-center items-center'
        data-qa='card-overlay'>
        <div
          className='flex flex-col justify-center w-full md:w-2/5 items-center'
          data-qa='card-overlay-content'>
          <h3
            className='text-black my-5 text-3xl md:text-6xl text-center font-extrabold uppercase'
            data-qa='title'>
            Don't Waste <br />
            Your Energy
          </h3>
          <p
            className='text-black text-md font-semibold text-center'
            data-qa='body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et quam
            in diam sagittis porta id quis sem. Sed tristique mi et libero
            maximus tristique. Sed ac ipsum accumsan nisl aliquet laoreet. Sed
            aliquam imperdiet ligula vel
          </p>
          <div className='mt-4' data-qa='cta-container'>
            <Link
              to='/products/'
              type='button'
              className='bg-secondary text-black text-md font-semibold my-4 border-black border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500'>
              Shop Now
            </Link>
          </div>
        </div>
      </figcaption>

      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-full h-auto'>
          <div className='w-full h-80 bg-gray-100 py-32 px-10 relative mb-4'>
            <img
              alt='gallery'
              className='w-full object-cover h-full absolute inset-0'
              src='https://images.unsplash.com/photo-1587245937293-b0510ee4c2be?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <button className='bg-secondary absolute z-10 left-10 bottom-4 border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500'>
              <Link to='/products'>Shop Now</Link>
            </button>
          </div>
          <div className='flex flex-wrap bg-white -mx-2'>
            <div className='px-2  relative w-full md:w-1/2'>
              <Link to='/products/mens_shoes'>
                <div className='flex flex-wrap w-full min-h-96 bg-gray-100 py-16 sm:py-24 px-6 sm:px-10 relative'>
                  <img
                    alt='gallery'
                    className='w-full object-cover h-full object-center block absolute inset-0'
                    src='https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-646cdd1a19c41.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*'
                  />
                </div>
                <span className='absolute top-4 z-10 font-semibold shadow-black left-10 text-white text-2xl md:text-3xl w-24 h-24 md:w-36 md:h-36 bg-primary-100 flex items-center justify-center'>
                  Men's Shoes
                </span>
                <button className='bg-secondary absolute z-10 left-10 bottom-4 border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500'>
                  <Link to='/products/mens_shoes'>Shop Now</Link>
                </button>
              </Link>
            </div>
            <div className='px-2  relative w-full md:w-1/2'>
              <Link to='/products/womens_shoes'>
                <div className='flex flex-wrap w-full min-h-96 bg-gray-100 py-16 sm:py-24 px-6 sm:px-10 relative'>
                  <img
                    alt='gallery'
                    className='w-full object-cover h-full object-center block absolute inset-0'
                    src='https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/55261276-5591-446a-a988-6e1744825402/pdp.jpg'
                  />
                </div>
                <span className='absolute top-4 z-10 shadow-black left-10 text-slate-950 font-bold text-2xl md:text-3xl w-24 h-24 md:w-36 md:h-36 bg-primary-100 flex items-center justify-center'>
                  Women's Shoes
                </span>
                <button className='bg-secondary absolute z-10 left-10 bottom-4 border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500'>
                  <Link to='/products/womens_shoes'>Shop Now</Link>
                </button>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap my-6 bg-white -mx-2'>
            <div className='px-2  relative w-full md:w-1/2'>
              <Link to='/products/kids_shoes'>
                <div className='flex flex-wrap w-full min-h-96 bg-gray-100 py-16 sm:py-24 px-6 sm:px-10 relative'>
                  <img
                    alt='gallery'
                    className='w-full object-cover h-full object-center block absolute inset-0'
                    src='https://images.unsplash.com/photo-1573309463328-ec43614b3def?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  />
                </div>
                <span className='absolute top-4 z-10 font-semibold shadow-black left-10 text-white text-2xl md:text-3xl w-24 h-24 md:w-36 md:h-36 bg-primary-100 flex items-center justify-center'>
                  Kid's Shoes
                </span>
                <button className='bg-secondary absolute z-10 left-10 bottom-4 border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500'>
                  <Link to='/products/kids_shoes'>Shop Now</Link>
                </button>
              </Link>
            </div>
            <div className='px-2  relative w-full md:w-1/2'>
              <Link to='/products/bags'>
                <div className='flex flex-wrap w-full min-h-96 bg-gray-100 py-16 sm:py-24 px-6 sm:px-10 relative'>
                  <img
                    alt='gallery'
                    className='w-full object-cover h-full object-center block absolute inset-0'
                    src='https://images.unsplash.com/photo-1609172795052-05bf80681031?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  />
                </div>
                <span className='absolute top-4 z-10 shadow-black left-10 text-slate-950 font-bold text-2xl md:text-3xl w-24 h-24 md:w-36 md:h-36 bg-primary-100 flex items-center justify-center'>
                  Bags
                </span>
                <button className='bg-secondary absolute z-10 left-10 bottom-4 border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-300 disabled:border-gray-300 disabled:text-dark-500'>
                  <Link to='/products/bags'>Shop Now</Link>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}