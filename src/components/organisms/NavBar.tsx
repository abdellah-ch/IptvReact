import { Button } from "../ui/button";
import { IoMdClose } from "react-icons/io";
import logo from "/images/logo.png";
import open from "../ui/openNav.svg";
import { useEffect, useState } from "react";
const NavBar = () => {
    const [isOpen, setIsopen] = useState<boolean>(false);
    useEffect(() => {

        if (isOpen) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }

    }, [isOpen])
    const OpenCloseNav = () => {
        setIsopen(!isOpen);
    };

    return (
        <div className="bg-black  z-10" >
            <div className="flex justify-between  h-[80px] sticky top-0 bg-black max-w-[91%] lg:flex lg:max-w-[90%] lg:m-auto lg:items-center lg:justify-around">
                <img src={logo} alt="" width={200} className="cursor-pointer m-4 lg:m-0" />
                <div
                    className="fixed right-9 top-8 cursor-pointer lg:hidden"
                    onClick={OpenCloseNav}
                >
                    <img src={open} alt="" />
                </div>

                {/* Desktop links */}
                <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center  gap-16 mr-[50px] mt-2">
                    <div className="py-5  hover:text-primary hover:border-b-[3px]  hover:border-b-primary  transition-all duration-300 ease-in-out text-[1em] font-semibold tracking-wide cursor-pointer">
                        <a href="#" >Home</a>
                    </div>
                    <div className="py-5  hover:text-primary hover:border-b-[3px]  hover:border-b-primary  transition-all duration-300 ease-in-out text-[1em] font-semibold tracking-wide cursor-pointer">
                        <a href="#" >Pricing</a>
                    </div>
                    <div className="py-5  hover:text-primary hover:border-b-[3px]  hover:border-b-primary  transition-all duration-300 ease-in-out text-[1em] font-semibold tracking-wide cursor-pointer">
                        <a href="#">Support & FAQ</a>
                    </div>
                    <div className="py-5  hover:text-primary hover:border-b-[3px]  hover:border-b-primary  transition-all duration-300 ease-in-out text-[1em] font-semibold tracking-wide cursor-pointer">
                        <a href="#" >Tutorial</a>
                    </div>
                </div>
                {/* Desktop links */}

                {/* Mobile Nav */}
                <div className={isOpen ? "fixed h-screen w-screen bg-black translate-y-0 duration-700 top-0 z-10" : "fixed -top-[100%] - h-screen w-screen -translate-y-full duration-700 z-10"}>
                    <div className="flex justify-between relative h-[87px]">
                        <img src={logo} alt="" width={200} className="m-4" />
                        <div
                            className="fixed right-9 top-9 cursor-pointer"
                            onClick={OpenCloseNav}
                        >
                            <IoMdClose className="text-2xl font-bold" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start w-[90%] m-auto gap-3 mt-4">
                        <div className="p-5">
                            <a href="#">Home</a>
                        </div>
                        <div className="p-5">
                            <a href="#">Pricing</a>
                        </div>
                        <div className="p-5">
                            <a href="#">Support & FAQ</a>
                        </div>
                        <div className="p-5">
                            <a href="#">Tutorial</a>
                        </div>
                    </div>
                </div>
                {/* Mobile Nab */}

                <div className="hidden md:flex md:mt-auto md:mb-auto md:cursor-pointeri md:w-[150px] h-[45px] ">
                    <Button className="font-bold purchaseButton w-full h-full">Free Trial</Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

/*
.btn-hover {
  background: #bf000a;
  background: var(--iq-primary-hover);
  border: .0625em solid #bf000a;
  border: .0625em solid var(--iq-primary-hover);
  -webkit-transition: color .3s ease;
  transition: color .3s ease;
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(.0625em) translateZ(0);
  transform: perspective(.0625em) translateZ(0);
  -webkit-box-shadow: 0 0 .0625em transparent;
  box-shadow: 0 0 .0625em transparent;
  position: relative;
  border-radius: .3125em;
}
*/
