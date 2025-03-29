import React, { useEffect, useState } from "react";

const BuyButton = () => {
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                setRazorpayLoaded(true);
                resolve(true);
                return;
            }
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;
            script.onload = () => {
                setRazorpayLoaded(true);
                resolve(true);
            };
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        loadRazorpayScript();
    }, []);

    const handlePayment = async () => {
        const loaded = await loadRazorpayScript();
        if (!loaded) {
            alert("Razorpay SDK failed to load.");
            return;
        }

        const options = {
            key: "rzp_test_chep0WhUx95GGy",
            amount: 1 * 100,
            currency: "INR",
            name: "Zero Prime Subscription",
            description: "Buy the ultimate nothingness!",
            image: "/logo.png",
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            theme: {
                color: "#c85d00",
            },
        };


        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <button
            onClick={handlePayment}
            className="px-8 py-2 mt-40 font-bold rounded-full bg-primaryColor text-yellow-50"
        >
            Buy Now
        </button>
    );
};

export default BuyButton;
