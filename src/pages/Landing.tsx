import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const Landing = () => {
    let movies = ["/images/movie1.webp","/images/movie2.webp","/images/movie3.webp","/images/movie4.webp","/images/movie5.webp","/images/movie6.webp","/images/movie7.webp"]
    return (
        <div className="z-0 ">
            <div className="bg-hero-pg bg-center lg:bg-cover bg-no-repeat w-screen h-[70vh] lg:h-[90vh] z-0">
                <div className="w-full h-full   opacity-45 Z-0">
                </div>
            </div>
            <div className="w-screen  my-9 z-10">
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
                                            <img src={image}  alt="" />
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