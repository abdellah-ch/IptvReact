import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const Landing = () => {
    const movies = ["/images/movie1.webp", "/images/movie2.webp", "/images/movie3.webp", "/images/movie4.webp", "/images/movie5.webp", "/images/movie6.webp", "/images/movie7.webp"]
    return (
        <div className="z-0   flex flex-col  w-screen items-center text-center">

            <i className="test w-auto lg:w-auto lg:mt-20 font-semibold text-xl text-white mt-5 pb-3  border-b-2 border-primary ">The International IPTV Service </i>
            <div className="w-full h-full relative">
                <div className="h-[60vh] mt-1   overflow-hidden bg-hero-pg bg-center   bg-cover lg:bg-cover bg-no-repeat w-screen  z-0 flex  bg-black opacity-40">
                </div>
                <div className="absolute top-0  lg:h-[70%] h-[70%] Z-0  flex flex-col justify-between items-center w-full p-5 mt-9">
                    <h1 className="texture text-4xl lg:text-6xl  headingstone lg:w-[50%] md:w-[80%] w-[100%]  leading-normal roboto-black-italic">Streamit Your Custom  OTT <i className="fw-normal">Platform</i>  Creator</h1>
                    <p className="lg:w-[50%] md:w-[70%] w-[100%]">Streamit offers the tools to create your customized OTT platform. Bring your
                        streamit was featured on ThemeForest</p>
                    <Button className="font-bold purchaseButton w-[220px] lg:w-[270px] lg:h-[50px] h-[40px]">PURCHASE</Button>
                </div>
            </div>

            <div className="w-screen  my-9 z-0">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="w-[100vw]"
                >
                    <CarouselContent className="">
                        {movies.map((image, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/6 rounded-lg">
                                <div className="">
                                    <img src={image} alt="" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default Landing