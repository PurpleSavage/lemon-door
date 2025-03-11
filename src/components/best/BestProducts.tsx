
import style from '../../css/bestoproducts.module.css'
import Image from "next/image"
export default function BestProducts() {
  return (
    <div className=" space-y-10 py-10 relative overflow-hidden ">
      <div className='absolute top-10 md:block hidden'>
        <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 100 Q 50 50, 90 100 T170 100 T250 100 T330 100 T410 100" 
                stroke="#dc00b0" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className='absolute top-10 right-0 -rotate-45'>
        <svg width="100" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 100 Q 50 50, 90 100 T170 100 T250 100 T330 100 T410 100" 
                stroke="black" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className='absolute top-[60%] right-10 -rotate-12'>
        <svg width="140" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 100 Q 50 50, 90 100 T170 100 T250 100 T330 100 T410 100" 
                stroke="#9900dc" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div className='absolute top-[50%] left-10 rotate-12'>
        <svg width="200" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 100 Q 50 50, 90 100 T170 100 T250 100 T330 100 T410 100" 
                stroke="#0082dc" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <h3 className={`text-3xl lg:text-6xl font-bold text-black text-center  ${style.autoShowM}`}>These are some of our t&#8209;shirts&mdash;drip
      in style!</h3>
      <div className="w-full xl:w-5/6 lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <div className={` flex md:flex-row flex-col items-center mx-auto gap-2 `}>  
          <div className="size-[300px] min-w-[300px] relative">
            <Image
              src={'/shirts/shirt-1.webp'}
              alt="T-shirt  image, XL size—horror, Space Horror collection"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className='space-y-2 self-start grow h-full px-4 '>
            <h4 className='text-lg lg:text-4xl text-black text-center'>The Bitch is back</h4>
            <p className='text-md lg:text-lg text-black'>
              T-shirt  from our &quot;Space Horror&quot; collection, black color, XL size—horror with style for a great October 31st.
            </p>
          </div>
        </div>

        <div className={`flex md:flex-row flex-col items-center mx-auto gap-2`}>
          <div className="size-[300px] min-w-[300px] bg-green-200 relative">
            <Image
              src={'/shirts/shirt-2.webp'}
              alt=" White T-shirt image, Summer Fishing collection,available in sizes L, XL, and M "
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className='space-y-2 self-start grow h-full px-4'>
            <h4 className='text-lg lg:text-4xl text-black text-center'>Fish Summer</h4> 
            <p className='text-md lg:text-lg text-black'>
              White T-shirt from our &quot;Summer Fishing&quot; collection, available in sizes L, XL, and M.  
              Dress in style this summer and go fishing with style!
            </p> 
          </div>
        </div>

        <div className={`flex md:flex-row flex-col items-center mx-auto gap-2 `}>
          <div className="size-[300px] min-w-[300px] bg-green-200 relative">
            <Image
              src={'/shirts/shirt-3.webp'}
              alt="shit image"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className='space-y-2 self-start grow h-full px-4'>
            <h4 className='text-lg lg:text-4xl text-black text-center'>Acid Moon</h4>
            <p className='text-md lg:text-lg text-black'>
              Dress in our <strong>Acid Moon</strong> T-shirt and join the <strong>&quot;Collapsed Love&quot;</strong> collection.  
              Let yourself be carried away by the psychedelic style of an <strong>Acid Moon</strong>.
            </p>
          </div>
        </div>


        <div className={`flex md:flex-row flex-col items-center mx-auto gap-2`}>  
          <div className="size-[300px] min-w-[300px] bg-green-200 relative">
            <Image
              src={'/shirts/shirt-4.webp'}
              alt="Judy, white color, XL size"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className='space-y-2 self-start grow h-full px-4'>
            <h4 className='text-lg md:text-4xl text-black text-center'>Adventure</h4>
            <p className='text-md md:text-lg text-black'>
              Judy, white color, XL size, Autumn Mist collection, and relaxed style.
            </p>
          </div>
        </div>
        
      </div> 
    </div>
  )
}
