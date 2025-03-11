import style from '../../css/modify.module.css'
import Image from 'next/image'
export default function Modify() {
  return (
    <section className='h-screen sticky top-0 z-10 bg-black flex flex-col'>
      <h3 className="text-3xl md:text-4xl font-bold tracking-widest text-white text-center py-4 w-full">
        We modify your garments, giving them a touch of our unique style.
      </h3>
      <div className={` ${style.parent} w-full md:w-5/6 mx-auto grow`}>
        <div className={`${style.div1} relative`}>
            <Image
              src="/modify/modify-1.jpg"
              alt='Image of clothing with a psychedelic mushroom design.'
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='object-cover'
            />

          
        </div>
        <div className={`${style.div2} relative`}  >
          <Image
            src="/modify/modify-2.jpg"
            alt='Black hoodie with a design of an alien lying down, being abducted by a spaceship.'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div3}  relative bg-amber-500`}>
          <Image
            alt="A guy posing with a black hoodie featuring a psychedelic anime design."
            src="/modify/modify-3.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div4} relative`}>
          <Image
            alt="Black hoodie with a melting skull design."
            src="/modify/modify-4.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div5} relative`}>
          <Image
            alt="Black hoodie with horror-style lettering."
            src="/modify/modify-5.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div6} relative`}>
          <Image
            alt="Wool pullover with a psychedelic design."
            src="/modify/modify-6.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div7} relative`}>
          <Image
            alt="Pullover with a design of a melting skull in flames."
            src="/modify/modify-7.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div8} relative`}>
          <Image
            alt="Boy wearing a white pullover with roses on the sleeves."
            src="/modify/modify-8.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div9} relative`}>
          <Image
            alt="Black pullover with a skull design on the back."
            src="/modify/modify-9.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
        <div className={`${style.div10} relative`}>
          <Image
            alt="Black T-shirt with a design of Wednesday Addams on the back."
            src="/modify/modify-10.jpg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}
