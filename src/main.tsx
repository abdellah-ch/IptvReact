import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
    "clientId": "AcnrU43kJM1L_dlW4CFRSwrU2_l4-gkKBkof6LJ3GyeJjb0Rhak4wlgZcBVIaNSf0G0aOOcxy_arEQ6C",
    currency: "USD",
    intent: "capture",
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <PayPalScriptProvider options={initialOptions}>
        <App />
    </PayPalScriptProvider>

)
