import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
    clientId: "AZa61YDkbU2izDZXFcdNRu-zolzwqqrqdXuXPCBiZTJIOz87H4aBICWJEBftY1I9cUfgMeEcW2cb8ygb",
    currency: "USD",
    intent: "capture",
};

ReactDOM.createRoot(document.getElementById('root')!).render(
        <PayPalScriptProvider options={initialOptions}>
        <App />
        </PayPalScriptProvider>

)
