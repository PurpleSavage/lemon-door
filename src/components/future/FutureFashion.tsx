import style from '../../css/future.module.css'
import Image from 'next/image'
export default function FutureFashion() {
  return (
    <section className='h-screen sticky top-0 z-10 bg-black flex flex-col'
      style={{
        backgroundColor: "#111927",
        backgroundImage: `
          radial-gradient(at 47% 33%, hsl(295.56, 100%, 43%) 0, transparent 59%), 
          radial-gradient(at 82% 65%, hsl(285.82, 76%, 14.000000000000002%) 0, transparent 55%);`
      }}
    >
      <h3 className=" text-4xl font-bold tracking-widest text-white text-center py-4 w-full">
        Futuristic clothing with neon style, a rain of colors.
      </h3>
      <div className={` ${style.parent} w-5/6 mx-auto grow`}>
        <div className={`${style.div1} relative`}>
            <Image
              src="/future/future-1.jpg"
              alt='Image of clothing with a psychedelic mushroom design.'
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='object-cover'
            />

          
        </div>
        <div className={`${style.div2} relative`}  >
          <Image
            src="/future/future-2.jpg"
            alt='Black hoodie with a design of an alien lying down, being abducted by a spaceship.'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div3}  relative bg-amber-500`}>
          <Image
            alt="A guy posing with a black hoodie featuring a psychedelic anime design."
            src="/future/future-3.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div4} relative`}>
          <Image
            alt="Black hoodie with a melting skull design."
            src="/future/future-4.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div5} relative`}>
          <Image
            alt="Black hoodie with horror-style lettering."
            src="/future/future-5.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div6} relative`}>
          <Image
            alt="Wool pullover with a psychedelic design."
            src="/future/future-6.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div7} relative`}>
          <Image
            alt="Pullover with a design of a melting skull in flames."
            src="/future/future-7.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div8} relative`}>
          <Image
            alt="Boy wearing a white pullover with roses on the sleeves."
            src="/future/future-8.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div9} relative`}>
          <Image
            alt="Black pullover with a skull design on the back."
            src="/future/future-9.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div10} relative`}>
          <Image
            alt="Black T-shirt with a design of Wednesday Addams on the back."
            src="/future/future-10.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}
