import Image from "next/image";

export default function ThinkingLikeUs() {
  return (
    <div
      className="h-screen sticky top-0 flex flex-col items-center justify-center gap-8 overflow-hidden"
      style={{
        backgroundColor: "#06080d",
        backgroundImage: `
          radial-gradient(at 47% 33%, hsl(246.36, 100%, 26%) 0, transparent 59%), 
           radial-gradient(at 82% 65%, hsl(218.00, 35%, 17%) 0, transparent 55%);`
      }}
    >
      <h3 className="text-center text-3xl md:text-5xl font-bold text-white">Think Like Us</h3>
      <div className="relative w-full  flex items-center justify-center">
        <div className="absolute left-0 z-20">
          <Image
            alt=""
            src="/thinkLikeUs/1.jpg"
            width={250}
            height={200}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
        <div className="absolute -top-20 left-48 z-10 md:block hidden">
          <Image
            alt=""
            src="/submodels/sub-model-1.jpg"
            width={100}
            height={100}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
        <div className="absolute top-[10%] right-[20%] z-10">
          <Image
            alt=""
            src="/submodels/sub-model-3.jpg"
            width={100}
            height={100}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
        <div className="absolute top-[20%] right-[30%] z-10">
          <Image
            alt=""
            src="/submodels/sub-model-5.jpg"
            width={80}
            height={100}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
        <div className="absolute -top-20 right-0 z-10 md:block hidden">
          <Image
            alt=""
            src="/submodels/sub-model-6.jpg"
            width={80}
            height={100}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
        <div className="absolute left-72 top-[40%] z-10">
          <Image
            alt=""
            src="/submodels/sub-model-7.jpg"
            width={80}
            height={100}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
        <div className="absolute left-96 top-[20%] z-10">
          <Image
            alt=""
            src="/submodels/sub-model-8.jpg"
            width={80}
            height={100}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>

        <div className="border border-slate-400/50 rounded-lg relative z-20
        shadow-lg bg-[rgba(0,0,0,0.3)]" style={{ backdropFilter: 'blur(8px) ' }}>
          <Image
            alt=""
            src="/thinkLikeUs/thinkLikeUs.png"
            width={400}
            height={300}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>



        <div className="absolute bottom-0 left-[70%] z-10">
          <Image
            alt=""
            src="/submodels/sub-model-4.jpg"
            width={100}
            height={100}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
        <div className="absolute left-72 bottom-0 z-10">
          <Image
            alt=""
            src="/submodels/sub-model-2.jpg"
            width={100}
            height={100}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
        <div className="absolute right-0 z-20 md:block hidden">
          <Image
            alt=""
            src="/thinkLikeUs/2.jpg"
            width={250}
            height={300}
            style={{
              maskImage:`linear-gradient( black 90%, transparent)`
            }}
          />
        </div>
      </div>
      
    </div>
  );
}
