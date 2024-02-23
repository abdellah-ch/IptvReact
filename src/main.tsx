import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
    "clientId": "AQW7BGiHlFCIeiHL4IJ6KxlBm_0Fsa4Pzz8LC19xjWJPOW3NaHd3fbj9lv6_-2isaZRPilT4dYn7hGEM",
    currency: "USD",
    intent: "capture",
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <PayPalScriptProvider options={initialOptions}>
        <App />
    </PayPalScriptProvider>

)
