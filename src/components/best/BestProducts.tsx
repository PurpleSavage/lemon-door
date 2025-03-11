import style from '../../css/bestoproducts.module.css'
import Image from "next/image"

export default function BestProducts() {
  return (
    <div className="space-y-10 py-10 relative overflow-hidden">
      <h3 className={`text-3xl lg:text-6xl font-bold text-black text-center ${style.autoShowM}`}>
        These are some of our t&#8209;shirts&mdash;drip in style!
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto mt-10">
        {[
          { src: "/shirts/shirt-1.webp", title: "The Bitch is Back", desc: "T-shirt from our “Space Horror” collection, black color, XL size." },
          { src: "/shirts/shirt-2.webp", title: "Fish Summer", desc: "White T-shirt from our “Summer Fishing” collection, sizes L, XL, M." },
          { src: "/shirts/shirt-3.webp", title: "Acid Moon", desc: "T-shirt from the “Collapsed Love” collection, psychedelic style." },
          { src: "/shirts/shirt-4.webp", title: "Adventure", desc: "Judy, white color, XL size, “Autumn Mist” collection." },
        ].map((shirt, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-200 p-4 rounded-lg max-w-sm mx-auto">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={shirt.src}
                alt={shirt.title}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-lg lg:text-2xl text-black text-center mt-4">{shirt.title}</h4>
            <p className="text-md text-black text-center">{shirt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
