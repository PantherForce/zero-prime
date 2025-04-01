import React from "react";

const Terms = () => {
    return (
        <div className="max-w-3xl mt-20 mx-auto p-6 text-white">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="mb-4">Effective Date: [Insert Date]</p>
            <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By subscribing to [Your Website Name], you agree to these terms. If you do
                not agree, please do not use our service.
            </p>
            <h2 className="text-xl font-semibold mt-6">2. Subscription & Payment</h2>
            <p className="mb-4">
                You agree to pay a monthly subscription fee of $1,000. No refunds will be
                issued once a payment has been made.
            </p>
            <h2 className="text-xl font-semibold mt-6">3. Limitation of Liability</h2>
            <p className="mb-4">
                We provide our service "as is" with no guarantees. We are not liable for
                any losses or damages resulting from the use of our service.
            </p>
            <h2 className="text-xl font-semibold mt-6">4. Termination</h2>
            <p className="mb-4">
                We reserve the right to terminate or suspend accounts at our discretion,
                without notice, if we detect fraudulent activity.
            </p>
            <h2 className="text-xl font-semibold mt-6">5. Contact Us</h2>
            <p className="mb-4">
                For any questions regarding these terms, contact support@[yourwebsite].com.
            </p>
        </div>
    );
};

export default Terms;