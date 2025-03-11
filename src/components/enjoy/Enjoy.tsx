import Line from "./Line"
import TextMotion from "@/shared/TextMotion"
export default function Enjoy() {
  return (
    <section className="h-[800px]  md:h-screen relative  overflow-hidden">
        <Line/>
        <div className="gap-10 absolute flex flex-col justify-between bottom-0 left-0 right-0 top-0 py-10 ">
            <div className="flex items-center justify-center">
                <TextMotion positionEndX={100}>
                    <h3 className="text-3xl md:text-4xl text-black font-bold text-center">Drip a unique style and be part of our fashion.</h3>
                </TextMotion>
            </div>
            <div className="flex grow md:flex-row flex-col items-center md:justify-center  gap-4 h-[500px] ">
                <div className="md:w-[350px] rounded-2xl shadow-2xl lg:-rotate-12 hover:rotate-0 relative cursor-pointer hover:scale-200 transition-transform ease-in-out
                z-20 p-4 space-y-2 bg-pink-600">
                    <h3 className="text-black text-md md:text-xl font-semibold">Enjoy unique styles with us.</h3>
                    <p className="text-white text-sm md:text-base">
                        Enjoy bold and out-of-this-world styles that push the limits of creativity. Stand out from the crowd, embrace your individuality, 
                        and drip with effortless style. Let your imagination run wild with our unique designs, crafted for those who dare to be different 
                        and make a statement wherever they go.
                    </p>
                </div>

                <div className="md:w-[350px] rounded-2xl shadow-2xl lg:rotate-45 relative hover:rotate-0 z-10 p-4 space-y-2 hover:scale-200 transition-transform ease-in-out
                bg-lime-600 cursor-pointer hover:z-30">
                    <h3 className="text-black text-md md:text-xl font-semibold">This is for you</h3>
                    <p className="text-white text-sm md:text-base">
                        If you believe in expressing yourself through bold and unconventional styles, then our clothing brand is 
                        made just for you. Dare to stand out with vibrant colors, eye-catching designs, and unique graphics that break the norm. 
                        Every piece is crafted for those who embrace creativity, individuality, 
                        and a fearless attitude toward fashion. Be different, be bold—wear your personality with pride!
                    </p>
                </div>
                <div className="md:w-[350px] rounded-2xl shadow-2xl lg:rotate-12 relative hover:rotate-0 z-20 p-4 space-y-2 hover:scale-200 transition-transform ease-in-out
                bg-cyan-600 cursor-pointer">
                    <h3 className="text-black text-md md:text-xl font-semibold">Trippy Threads - Don’t Just Wear It, Live It!</h3>
                    <p className="text-white text-sm md:text-base">
                        Step into a world of vibrant colors, mind-bending patterns, and one-of-a-kind designs that break the ordinary. 
                        Our psychedelic clothing is made for free spirits, creative minds, and souls that dare to stand out. 
                        Wear art and let your style speak for itself!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}