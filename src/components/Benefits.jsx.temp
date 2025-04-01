import { motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom"; // For navigation
import { useUserContext } from "../context/UserContext"; // Import the UserContext

Modal.setAppElement('#root');

const pricingData = [
  {
    id: 1,
    title: "Basic Nothing",
    price: "$5/month",
    description: [
      "No perks.",
      "No refunds.",
      "Just pure, unfiltered nothingness.",
    ],
    backgroundColor: "",
    textColor: "text-gray-600",
  },
  {
    id: 3,
    title: "Ultimate Nothing",
    price: "$100/month",
    description: [
      "The highest level of nothingness.",
      "Bragging rights? Maybe.",
      "No benefits, just pure gold-level nothing.",
    ],
    backgroundColor: "",
    textColor: "text-gray-600",
  },
  {
    id: 2,
    title: "Premium Nothing",
    price: "$20/month",
    description: [
      "Get absolutely nothing—but at a higher cost.",
      "No leaderboard, no bragging rights.",
      "A higher cost for a higher nothingness.",
    ],
    backgroundColor: "",
    textColor: "text-gray-600",
  },
];

const Pricing = () => {
  const { user, updateUser } = useUserContext(); // Get user from context
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [earnings, setEarnings] = useState("");
  const [subscriptions, setSubscriptions] = useState("");
  const [response, setResponse] = useState("");
  const [finalMessage, setFinalMessage] = useState("");
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setEarnings("");
    setSubscriptions("");
    setResponse("");
    setFinalMessage("");
  };

  const getResponseMessage = () => {
    if (earnings && subscriptions) {
      const yearlyEarnings = parseInt(earnings);
      const yearlySubscriptions = parseInt(subscriptions);

      if (yearlyEarnings > 100000) {
        return "You are a high roller! Consider the Ultimate Nothing tier for gold-level prestige!";
      } else if (yearlySubscriptions > 500) {
        return "You're paying a lot in subscriptions! Maybe the Premium Nothing tier would be perfect for you.";
      } else {
        return "A humble lifestyle! The Basic Nothing tier might suit you.";
      }
    }
    return "Answer the questions to get your perfect tier!";
  };

  const handleSubmit = () => {
    setFinalMessage(getResponseMessage());
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get_user_info?token=" + localStorage.getItem("idToken"));
      if (response.ok) {
        const data = await response.json();
        updateUser({
          email: data.email,
          userId: data.user_id,
          loggedIn: true,
          subscribedPlanId: user.subscribedPlanId,
        });
        return { email: data.email, userId: data.user_id };
      } else {
        throw new Error("Failed to fetch user info");
      }
    } catch (error) {
      console.error("Error fetching user info: ", error);
      alert("Failed to fetch user info.");
    }
  };

  const handlePayment = async (tierId) => {
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const tier = pricingData.find((tier) => tier.id === tierId);
    const priceInDollars = parseInt(tier.price.replace('$', '').split('/')[0].trim());
    const priceInINR = priceInDollars * 90;

    const options = {
      key: "rzp_test_chep0WhUx95GGy", // Razorpay API key
      amount: priceInINR * 100, // Amount in paise
      currency: "INR",
      name: tier.title,
      description: `Subscribe to ${tier.title}`,
      image: "/logo.png",
      handler: async function (response) {
        const userInfo = await fetchUserInfo();
        if (userInfo) {
          // Store payment and pass the planId to the backend
          const planId = tier.id;
          await storePayment(userInfo.email, response.razorpay_payment_id, planId);

          // Add the new plan to the user's subscriptions (do not overwrite)
          updateUser({
            ...user,
            subscriptions: [...user.subscriptions, { plan_id: planId, payment_id: response.razorpay_payment_id, date: new Date().toISOString() }]
          });
        }
      },
      theme: {
        color: "#c85d00",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };




  const storePayment = async (email, paymentId, planId) => {
    try {
      // Check if the userId is available
      if (!user.userId) {
        throw new Error("User ID is missing");
      }

      const response = await fetch("http://127.0.0.1:5000/store_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          razorpay_payment_id: paymentId,
          plan_id: planId,
          userId: user.userId, // Ensure that userId is included
        }),
      });

      if (response.ok) {
        // After successful payment, update the user's subscribed plan
        updateUser({
          ...user,
          subscribedPlanId: planId,  // Update the planId to trigger a re-render
        });
      } else {
        throw new Error("Failed to store payment");
      }
    } catch (error) {
      console.error("Error storing payment: ", error);
      alert("Failed to store payment.");
    }
  };



  return (
    <section className="relative px-4 overflow-hidden md:px-10">
      <motion.div
        className="container w-full mx-auto backdrop-blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-transparent sm:text-4xl from-pink-600 font-Sync bg-gradient-to-r via-yellow-500 to-orange-600 bg-clip-text">
            Pick Your Nothingness Level
          </h2>
          <p className="text-sm text-gray-400 sm:text-base">
            Choose from our exclusive tiers and get the best of absolutely nothing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-10 mb-10 lg:grid-cols-3 lg:px-4">
          {pricingData.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`p-8  ${tier.backgroundColor} ring-1 cursor-pointer ring-gray-800/70 backdrop-blur-2xl flex flex-col justify-between`}
              style={{ minHeight: "200px" }}
            >
              <div className="text-center">
                <h3 className={`text-lg font-semibold sm:text-xl ${tier.textColor} font-Sync`}>
                  {tier.title}
                </h3>
                <p className={`mt-2 text-2xl font-semibold ${tier.textColor}`}>{tier.price}</p>
              </div>
              <div className="mt-4">
                <ul className={`space-y-2 text-sm ${tier.textColor}`}>
                  {tier.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-lg text-yellow-400">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  const idToken = localStorage.getItem("idToken");
                  if (idToken) {
                    if (parseInt(user.subscribedPlanId) === tier.id) {
                      // Prevent subscription if the user is already subscribed to this plan
                      alert("You're already subscribed to this plan.");
                    } else {
                      handlePayment(tier.id); // Proceed with payment if the user is not already subscribed
                    }
                  } else {
                    navigate("/login"); // Redirect to login page if not logged in
                  }
                }}
                className={`px-8 py-2 mt-4 font-bold text-white ${parseInt(user.subscribedPlanId) === tier.id ? 'bg-black cursor-not-allowed' : 'bg-primaryColor'}`}
              // Disable the button if already subscribed
              >
                {parseInt(user.subscribedPlanId) === tier.id
                  ? "Subscribed" // Show "Subscribed" if the user has already subscribed to this tier
                  : localStorage.getItem("idToken") // Check if user is logged in (idToken exists)
                    ? "Subscribe Now" // Show "Subscribe Now" if the user is logged in
                    : "Login to Subscribe"}
              </button>

            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Modal for Tier Selection */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Know Your Tier"
        className="bg-white p-6 rounded-xl shadow-xl max-w-lg mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="flex flex-row justify-end">
          <button onClick={closeModal} className="text-red-500 text-xl font-bold">
            x
          </button>
        </div>
        <div className="mb-4 p-1">
          <label htmlFor="earnings" className="block text-sm font-medium text-gray-700">
            How much do you earn annually?
          </label>
          <input
            type="number"
            id="earnings"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            value={earnings}
            onChange={(e) => setEarnings(e.target.value)}
            placeholder="Your yearly earnings"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subscriptions" className="block text-sm font-medium text-gray-700">
            How much do you spend annually on active subscriptions?
          </label>
          <input
            type="number"
            id="subscriptions"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            value={subscriptions}
            onChange={(e) => setSubscriptions(e.target.value)}
            placeholder="Your yearly subscription costs"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="response" className="block text-sm font-medium text-gray-700">
            Your Wish:
          </label>
          <input
            type="text"
            id="response"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Your personalized tier wish"
          />
        </div>

        <div className="flex justify-between items-center mt-6">
          <button onClick={handleSubmit} className="px-6 py-2 bg-primaryColor text-white rounded-full">
            Submit
          </button>
          <p>{finalMessage}</p>
        </div>
      </Modal>
    </section>
  );
};

export default Pricing;
