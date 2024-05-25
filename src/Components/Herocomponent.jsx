import React from 'react'
import MyCarousel from './MyCarousel'

function Herocomponent() {
  return (
    <>
    <div className="hidden sm:block font-mono mb-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#a564af] sm:text-6xl">
          CoinWhiz
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#4f3155]">
          "Stay Ahead of the Market with CoinWhiz"
        </p>
      </div>
    </div>
     <div>
          <MyCarousel />
     </div>
    </>
  )
}

export default Herocomponent