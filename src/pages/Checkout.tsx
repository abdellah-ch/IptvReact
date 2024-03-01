import PaypalButton from "@/components/organisms/PaypalButton"
import { useParams } from "react-router-dom";

const Checkout =  () => {
    
    const {id} = useParams<'id'>();
    
    let info ={price:"",subscription:""}

    switch (id) {
        case '1':
            info = {
                price : "$ 12.99",
                subscription : "3 months"
            }
            break;
        case '2':
            info = {
                price : "$ 36.99",
                subscription : "6 months"
            }
            break;
        case '3':
            info = {
                price :  "$ 80",
                subscription : "12 months"
            }
            break;
        default:
            info = {
                price : "$ 36.99",
                subscription : "6 months"
            }
            break;
    }
    return (
        <div className="min-h-[84vh] flex justify-center items-center text-black">

            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://play-lh.googleusercontent.com/eQuiBINHK6NhU7Gb5pZWYBd0-EEaQZO-UgRHnVHfy25SZd4FdioHzndYw9miii1zVQ" alt="" />
                            <div className="flex w-full flex-col px-4 py-4 text-black">
                                <span className="font-semibold ">{info.subscription}</span>
                                <p className="text-lg font-bold">{info.price}</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="mt-10 bg-black px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">Complete your order by providing your payment details.</p>
                    <div className="">
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium text-white">Email</label>
                        <div className="relative">
                            <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>
                        
                        



                        <div className="mt-6 flex border-t py-2 items-center justify-between">
                            <p className="text-sm font-medium text-white">Total</p>
                            <p className="text-2xl font-semibold text-white">{info.price}</p>
                        </div>
                    </div>
                    <PaypalButton info = {info} />
                    
                </div>
            </div>
        </div>
    )
}

export default Checkout