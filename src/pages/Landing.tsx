
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const Landing = () => {
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
                            delay: 1000,
                        }),
                    ]}
                    className="w-[80vw] mx-auto "
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src="/images/movie1.webp" alt="" />
                                        </CardContent>
                                    </Card>
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