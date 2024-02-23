import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const Landing = () => {

    //const [{ options, isPending }, dispatch] = usePayPalScriptReducer();


    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "8.99",
                    },
                },
            ],
        });
    }
    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }

    const handlePaymentPaypale = async () => {
        console.log("payment in process");
    }

    const movies = [
        "/images/movie1.webp",
        "/images/movie2.webp",
        "/images/movie3.webp",
        "/images/movie4.webp",
        "/images/movie5.webp",
        "/images/movie6.webp",
        "/images/movie7.webp",
    ];
    return (
        <div className="z-0   flex flex-col  w-screen items-center text-center">
            <i className="test w-auto lg:w-auto lg:mt-20 font-semibold text-xl text-white mt-5 pb-3  border-b-2 border-primary ">
                The International IPTV Service{" "}
            </i>
            <div className="w-full h-full relative">
                <div className="h-[60vh] mt-1   overflow-hidden bg-hero-pg bg-center   bg-cover lg:bg-cover bg-no-repeat w-screen  z-0 flex  bg-black opacity-40"></div>
                <div className="absolute top-0  lg:h-[70%] h-[70%] Z-0  flex flex-col justify-between items-center w-full p-5 mt-9">
                    <h1 className="texture text-3xl lg:text-6xl  headingstone lg:w-[50%] md:w-[80%] w-[100%]  leading-normal roboto-black-italic">
                        StudioTv Your Ultimate <i className="fw-normal">IPTV </i>{" "}
                        Destination
                    </h1>
                    <p className="lg:w-[50%] md:w-[70%] w-[100%]">
                        Stream Your Favorites Anytime, Anywhere with Our Premium Selection
                        of Channels and On-Demand Content
                    </p>
                    <Button
                        onClick={handlePaymentPaypale}
                        className="font-bold purchaseButton w-[220px] lg:w-[270px] lg:h-[50px] h-[40px]">
                        PURCHASE
                    </Button>
                </div>
            </div>

            <div className="text-center lg:mt-8 p-3 mb-7">
                <h1 className="roboto-black-italic lg:text-4xl text-2xl">
                    Explore 120,000+ Channels and VOD from Across the Globe
                </h1>
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
                            <CarouselItem
                                key={index}
                                className="basis-1/2 md:basis-1/3 lg:basis-1/6 rounded-lg"
                            >
                                <div className="">
                                    <img src={image} alt="" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div>
                <div className="pt-5 bg-black" id="pricing">
                    <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center mb-16">
                            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Stream, Watch, Enjoy
                            </p>
                        </div>

                        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div className="ring-1 ring-white/10 bg-white/5 rounded-3xl p-8 xl:p-10">
                                <div className="flex items-center justify-between gap-x-4">
                                    <h2
                                        id="product1"
                                        className="text-lg font-semibold leading-8 text-white"
                                    >
                                        Product Type 1
                                    </h2>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">
                                    Product details for Product Type 1
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">
                                        € 10 / unit
                                    </span>
                                    <span className="text-sm font-semibold leading-6 text-gray-300"></span>
                                </p>
                                {/* <a
                                    href="#"
                                    onClick={handlePaymentPaypale}
                                    aria-describedby="product1"
                                    className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Order Now
                                </a> */}
                                <PayPalButtons
                                    className="mt-6"
                                    style={{ layout: "vertical" }}
                                    createOrder={(data, actions) => onCreateOrder(data, actions)}
                                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                                />
                                <ul
                                    role="list"
                                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                                >
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        40 units
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        1 feature
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Fast delivery
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/5 ring-2 ring-primary rounded-3xl p-8 xl:p-10">
                                <div className="flex items-baseline justify-between gap-x-4">
                                    <h2
                                        id="product2"
                                        className="text-lg font-semibold leading-8 text-white"
                                    >
                                        Product Type 2
                                    </h2>
                                    <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                        Most popular
                                    </p>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">
                                    The most popular choice. Product details for Product Type 2
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">
                                        € 20 / unit
                                    </span>
                                    <span className="text-sm font-semibold leading-6 text-gray-300"></span>
                                </p>
                                {/* <a
                                    href="#"
                                    aria-describedby="product2"
                                    className="bg-primary text-white shadow-sm hover:bg-red focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    onClick={handlePaymentPaypale}
                                >
                                    Order Now
                                </a> */}
                                <PayPalButtons
                                    className="mt-6"
                                    style={{ layout: "vertical" }}
                                    createOrder={(data, actions) => onCreateOrder(data, actions)}
                                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                                />
                                <ul
                                    role="list"
                                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                                >
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        120 units
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        3 different features
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Fast delivery
                                    </li>
                                </ul>
                            </div>

                            <div className="ring-1 ring-white/10 bg-white/5 rounded-3xl p-8 xl:p-10">
                                <div className="flex items-center justify-between gap-x-4">
                                    <h2
                                        id="product3"
                                        className="text-lg font-semibold leading-8 text-white"
                                    >
                                        Product Type 3
                                    </h2>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">
                                    Product details for Product Type 3
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">
                                        € 50 / unit
                                    </span>
                                    <span className="text-sm font-semibold leading-6 text-gray-300"></span>
                                </p>
                                {/* <a
                                    href="#"
                                    onClick={handlePaymentPaypale}
                                    aria-describedby="product3"
                                    className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Order Now
                                </a> */}
                                <PayPalButtons
                                    className="mt-6"
                                    style={{ layout: "vertical" }}
                                    createOrder={(data, actions) => onCreateOrder(data, actions)}
                                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                                />
                                <ul
                                    role="list"
                                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                                >
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        240 units
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        6 different features
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-5 flex-none text-white"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Fast delivery
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
