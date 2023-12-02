import React, { useState } from "react";

const Transaction = () => {
  // Initialize state variables for form fields and errors
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (!name) {
      errors.name = "Please enter your name";
    }

    if (!cardNumber || !validateCardNumber(cardNumber)) {
      errors.cardNumber = "Please enter a valid card number";
    }

    if (!expiryDate) {
      errors.expiryDate = "Please enter a valid expiry date";
    }

    if (!cvv || !validateCVV(cvv)) {
      errors.cvv = "Please enter a valid CVV";
    }

    if (!amount) {
      errors.amount = "Please enter a valid amount";
    }
    if (parseFloat(amount) < 1 || parseFloat(amount) > 10000) {
      errors.amount = "Please enter the amount between 1 - 10,000";
    }

    setErrors(errors); // Update the errors state with the collected errors

    // If there are no errors, submit the form and perform the payment and clear the input fields
    if (Object.keys(errors).length === 0) {
      alert("Payment successful!");
      setName("");
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
      setAmount("");
    }
  };

  const validateCardNumber = (cardNumber) => {
    const regex = /^[0-9]{16}$/;
    return regex.test(cardNumber);
  };

  const validateCVV = (cvv) => {
    const regex = /^[0-9]{3}$/;
    return regex.test(cvv);
  };

  return (
    <div className="mt-28 mb-28 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-medium mb-5">Fill Transaction Details</h1>
      <form onSubmit={handleSubmit} className="w-[280px]">
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="name" className="text-[#5a7184] font-medium block">
            <p>
              Name<span className="text-red-600 ml-[1.5px]">*</span>
            </p>
          </label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="placeholder:text-[#959ead] text-dark-hard mt-1 rounded-md px-3 py-2 font-medium block outline-none border-[2px] focus:border-pink-300 focus:border-primary"
          />
          <span className="text-red-500 text-sm">{errors.name}</span>
        </div>
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="cn" className="text-[#5a7184] font-medium block">
            <p>
              Card Number<span className="text-red-600 ml-[1.5px]">*</span>
            </p>
          </label>
          <input
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            type="tel"
            maxlength="16"
            placeholder="xxxx xxxx xxxx xxxx"
            className="placeholder:text-[#959ead] text-dark-hard mt-1 rounded-md px-3 py-2 font-medium block outline-none border-[2px] focus:border-pink-300 focus:border-primary"
          />
          <span className="text-red-500 text-sm">{errors.cardNumber}</span>
        </div>
        <div className="flex flex-col mb-3 w-full">
          <label
            htmlFor="exp-date"
            className="text-[#5a7184] font-medium block"
          >
            <p>
              Expiry Date<span className="text-red-600 ml-[1.5px]">*</span>
            </p>
          </label>
          <input
            type="date"
            value={expiryDate}
            onChange={(event) => setExpiryDate(event.target.value)}
            placeholder="mm/dd/yyyy"
            className="placeholder:text-[#959ead] text-dark-hard mt-1 rounded-md px-3 py-2 font-medium block outline-none border-[2px] focus:border-pink-300 focus:border-primary"
          />
          <span className="text-red-500 text-sm">{errors.expiryDate}</span>
        </div>
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="cvv" className="text-[#5a7184] font-medium block">
            <p>
              CVV<span className="text-red-600 ml-[1.5px]">*</span>
            </p>
          </label>
          <input
            type="tel"
            maxlength="3"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            placeholder="xxx"
            className="placeholder:text-[#959ead] text-dark-hard mt-1 rounded-md px-3 py-2 font-medium block outline-none border-[2px] focus:border-pink-300 focus:border-primary"
          />
          <span className="text-red-500 text-sm">{errors.cvv}</span>
        </div>
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor="amount" className="text-[#5a7184] font-medium block">
            <p>
              Amount<span className="text-red-600 ml-[1.5px]">*</span>
            </p>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount(1 - 10,000)"
            className="placeholder:text-[#959ead] text-dark-hard mt-1 rounded-md px-3 py-2 font-medium block outline-none border-[2px] focus:border-pink-300 focus:border-primary"
          />
          <span className="text-red-500 text-sm">{errors.amount}</span>
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white mt-3 font-bold rounded-lg text-lg px-6 py-3 w-full"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Transaction;
