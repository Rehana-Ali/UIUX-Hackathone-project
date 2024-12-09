

import Card from "./components/card";
import Products from "./components/products";
import ShowMore from "./components/showmore";
import Furniture from "./components/furniture";
import Image from 'next/image'

export default function Home(){
  return(
      <div>
          <div className="bg-[#F5F5F5]">
  {/* Right side */}
  <Image
    src="/frontimage.png"
    width={1430}
    height={802}
    alt="hero image"
    className="w-full h-auto max-w-[1440px] max-h-[500px] mx-auto"
  />

  <div>
    <Image
      src="/Group 114.png"
      width={500}
      height={343}
      alt="graph"
      className="w-[90%] max-w-[500px] h-auto absolute right-5 sm:right-10 md:right-20 lg:right-32 xl:right-40 top-10 sm:top-14 md:top-20"
    />
  </div>
</div>
          <Card/>
          <Products/>
          <ShowMore/>
          <Furniture/>
      </div>
  )
}
Home();