import TextMotion from "@/shared/TextMotion";
export default function Header() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/header.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <div className="absolute bottom-0 left-0 gap-4 top-0 right-0 z-10 flex items-center flex-col justify-center">
          <TextMotion positionEndX={100}>
            <h1 className="uppercase text-center text-6xl md:text-8xl lg:text-9xl text-lime-500 ">
              <span className="drop-shadow-[2px_2px_0px_black]">Lemon</span> <span className="bg-white rounded-xl">Door</span>
            </h1>
          </TextMotion>
          <TextMotion positionEndX={-100}>
            <p className="text-4xl md:text-5xl lg:text-6xl text-white text-center">Own your vibe and stand out with our unique styles.</p>
          </TextMotion>
      </div>
    </header>
  );
}
