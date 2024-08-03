import BannerDiscount from "@/components/BannerDiscount";
import BannerProduct from "@/components/BannerProduct";
import CarouselTextBanner from "@/components/CarouselTextBanner";
import ChooseCategory from "@/components/ChooseCategory";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner></CarouselTextBanner>
      <FeaturedProducts></FeaturedProducts>
      <BannerDiscount></BannerDiscount>
      <ChooseCategory></ChooseCategory>
      <BannerProduct></BannerProduct>
    </main>
  );
}
