import SmoothScroll from "@/shared/SmoothScroll";
import Header from "@/components/header/Header";
import Enjoy from "@/components/enjoy/Enjoy";
import Choose from "@/components/choose/Choose";
import BestProducts from "@/components/best/BestProducts";
import Comments from "@/components/comments/Comments";
import ThinkingLikeUs from "@/components/thinkLikeUs/ThinkingLikeUs";
import Modify from "@/components/modify/Modify";
import FutureFashion from "@/components/future/FutureFashion";
import End from "@/components/end/End";



export default function Home() {
  return (
    <div className="min-h-screen bg-white ">
      <SmoothScroll>
        <Header/>
        <Enjoy/>
        <Choose/>
        <BestProducts/>
        <ThinkingLikeUs/>
        <Modify/>
        <FutureFashion/>
        <Comments/>
        <End/>
      </SmoothScroll>
    </div>
  );
}
