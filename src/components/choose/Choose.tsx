'use client'
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
export default function Choose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start start", "end start"] 
  });

  // Movimiento más suave y largo
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-gray-200 ">
       <div className="sticky top-0 h-screen bg-black overflow-hidden flex items-center justify-start">
        <motion.div 
          className="px-5 min-w-[400vw] h-full gap-4 flex items-center"
          style={{ x }}
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-widest text-white">Choose a design, and we’ll make it a reality.</h3>
          <picture >
              <Image
              width={300}
              height={300}
              alt="image psychedelic design tshirt"
              src={'/designs/design-1.webp'}
              priority
            />
          </picture>

          <picture>
            <Image
              width={500}
              height={300}
              alt="image psychedelic design tshirt"
              src={'/designs/design-2.webp'}
              priority
            />
          </picture>

          <picture>
            <Image
              width={400}
              height={300}
              alt="image psychedelic design tshirt"
              src={'/designs/design-3.webp'}
              priority
            />
          </picture>

          <picture>
            <Image
              width={500}
              height={300}
              alt="image psychedelic design tshirt"
              src={'/designs/design-4.webp'}
              priority
            />
          </picture>

          <picture>
            <Image
              width={400}
              height={300}
              alt="image psychedelic design tshirt"
              src={'/designs/design-5.webp'}
              priority
            />
          </picture>
          <picture>
            <Image
              width={500}
              height={300}
              alt="image psychedelic design tshirt"
              src={'/designs/design-6.webp'}
              priority
            />
          </picture>
          <picture>
            <Image
              width={400}
              height={300}
              alt="image psychedelic design tshirt"
              src={'/designs/design-7.webp'}
              priority
            />
          </picture>
          <h3 className="text-3xl md:text-5xl font-bold tracking-widest text-white">Choose and be unique!</h3>
        </motion.div>
      </div>
    </section>
  )
}
