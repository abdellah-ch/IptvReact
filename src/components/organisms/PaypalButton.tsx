import {  OnApproveData } from "@paypal/paypal-js";
import { PayPalButtons } from "@paypal/react-paypal-js";

type Info = {
  price: number;
  subscription:string;
} 
type PropsType = {
    info:Info
}

const PaypalButton = (props:PropsType) => {
    
      const createOrder = async () => {
          // Order is created on the server and the order id is returned
          const response = await fetch("http://localhost:8888/api/orders", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              // use the "body" param to optionally pass additional order information
              // like product skus and quantities
              body: JSON.stringify({
                  product: {
                      description: "socer coach",
                      cost:props.info.price 
                }
              }),
          });
          const order = await response.json();
          return order.id;
        };
        const onApprove = async (data:OnApproveData) => {
           // Order is captured on the server and the response is returned to the browser
           console.log(data);
           
           const response = await fetch(`http://localhost:8888/api/orders/${data.orderID}/capture`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderID: data.orderID
                })
            });
            return await response.json();
        };
        return (
          <PayPalButtons
            createOrder={() => createOrder()}
            onApprove={(data) => onApprove(data).catch((err)=>console.log(err))}
          />
        );
}

export default PaypalButton
