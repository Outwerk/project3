import React from 'react'

export default function HeroSection() {
  return (
    
<section
  className="h-screen overflow-hidden bg-[url(https://img.freepik.com/premium-photo/bride-groom-embracing-dark-room_852340-25310.jpg)] bg-cover bg-top bg-no-repeat"
>
  <div className="w-full h-full bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24 ">
    <div className="h-fit text-center ltr:sm:text-left rtl:sm:text-right flex justify-start items-start flex-col">
      <h2 className="text-2xl  font-extrabold text-white sm:text-3xl md:text-5xl uppercase whitespace-nowrap">creative Photograpy By</h2>
      <h2 className="text-2xl  font-extrabold text-white sm:text-3xl md:text-5xl uppercase">L.John Morelli</h2>
      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-slate-600 px-12 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 uppercase"
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
</section>

  )
}
