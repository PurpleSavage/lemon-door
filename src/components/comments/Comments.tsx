import style from '../../css/comments.module.css'
import Image from 'next/image'
export default function Comments() {
  return (
    <section className='md:h-screen w-full space-y-16 relative z-30 bg-white' id="testimonials">
        <div className='space-y-4 pt-10'>
          <h2 className='text-3xl md:text-5xl text-center  text-black font-bold'>
            Testimonials
          </h2>
          <p className='text-bold text-md md:text-xl text-center text-black '
          >These are some of the testimonials from people who have tried our products.</p>
        </div>


        <div className={`${style.wrapper} `}>
          <div className={`${style.item} ${style.item1} space-y-6 py-4 rotate-12 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='photo profile sectio ntestimonials'
                  src='/people/Giorgina.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>K. Giorgina</p>
                <p className='px-2'>Junio 2024</p>
              </div>
            </div>
            <p className='px-2'>
              The designs are amazing, plus they have all sizes. I loved it!!
            </p>
          </div>


          <div className={`${style.item} ${style.item2} space-y-6 py-4 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='photo profile sectio ntestimonials'
                  src='/people/Charper.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>E. Charper</p>
                <p className='px-2'>Agosto 2024</p>
              </div>
            </div>
            <p className="px-2">
              I never thought finding such crazy clothes would be this amazing. I&apos;m literally dripping!! This has so much style&mdash;it&apos;s on fire!
            </p>

          </div>


          <div className={`${style.item} ${style.item3} space-y-6 py-4 -rotate-12 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='photo profile sectio ntestimonials'
                  src='/people/Donatello.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>E. Donatello</p>
                <p className='px-2'>Septiembre 2024</p>
              </div>
            </div>
            <p className="px-2">
              I loved it from the start! When the hoodie I ordered arrived, I knew I had made a great purchase. I totally recommend them. God, I love it!
            </p>
          </div>
          <div className={`${style.item} ${style.item4} space-y-6 py-4 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='photo profile sectio ntestimonials'
                  src='/people/kenet.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>Kenet</p>
                <p className='px-2'>Marzo 2024</p>
              </div>
            </div>
            <p className="px-2">
              It was the perfect gift for my brother! He loved it, and I already want to buy more!!
            </p>

          </div>



          <div className={`${style.item} ${style.item5} space-y-6 py-4 rotate-12 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='photo profile sectio ntestimonials'
                  src='/people/Henry.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>P. Henry</p>
                <p className='px-2'>Enero 2025</p>
              </div>
            </div>
            <p>
              Excellent service! Plus, the designs are unique, full of life, yet fascinating. These people are very creative with what they sell &mdash; they&apos;re really good at what they do!
            </p>


          </div>



          <div className={`${style.item} ${style.item6} space-y-6 py-4 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='photo profile sectio ntestimonials'
                  src='/people/Lia.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>Y. Lia</p>
                <p className='px-2'>Julio 2024</p>
              </div>
            </div>
            <p className="px-2">
              The best thing about Lemon Door is their customer service! Plus, I love their designs. The clothes are so comfortable—I think this will be my favorite store!
            </p>

          </div>


          <div className={`${style.item} ${style.item7} space-y-6 py-4 -rotate-12 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='photo profile sectio ntestimonials'
                  src='/people/Mia.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>M. Mia</p>
                <p className='px-2'>Junio 2024</p>
              </div>
            </div>
            <p>
              They are a great option! There is clothing for every occasion, and the designs are unique &amp; incredible. I think they have a lot of creativity.
            </p>

          </div>



          <div className={`${style.item} ${style.item8} space-y-6 py-4 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='photo profile sectio ntestimonials'
                  src='/people/Dustin.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>Dustin</p>
                <p className='px-2'>Mayo 2023</p>
              </div>
            </div>
            <p>
              The best store&mdash;everything is perfect! My t&#8209;shirt arrived at home, and I loved it. It fits me perfectly&mdash;now I have to go out and show off my style!
            </p>

          </div>
        </div>
    </section>
  )
}