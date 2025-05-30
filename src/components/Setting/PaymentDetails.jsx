import React from "react";

function Payment() {
  return (
    <div className="min-h-screen bg-gray-100 font-inter p-4 sm:p-8 lg:p-12">
      {/* Contact Section - Added here */}
      <div className="bg-white rounded-lg shadow-md mb-4">
        {" "}
        {/* mb-4 for spacing below it */}
        <div className="flex justify-between items-center p-6">
          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          {/* Down arrow icon for the Contact section */}
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      {/* Payment Section - Visually rendered, but not functional */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center p-6">
          <h3 className="text-lg font-semibold text-gray-800">Payment</h3>

          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </div>
        <div className="p-6 pt-0 border-t border-gray-200">
          <h4 className="text-md font-semibold text-gray-700 mb-4">
            Payment method
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-4 mb-6">
            {/* VISA Card Option - Visually checked, */}
            <div className="flex items-center justify-between p-4 rounded-lg border-2 border-purple-600 bg-purple-50 max-w-xs">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={true}
                  readOnly
                  className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mr-2"
                />
                <div className="flex flex-col items-start">
                  <span className="text-gray-700 font-medium">347809</span>
                  <span className="text-sm text-gray-500">Visa Edit</span>
                </div>
              </div>
              {/* VISA Logo Placeholder */}
              <div className="w-12 h-8 bg-blue-700 text-white flex items-center justify-center text-xs font-bold rounded">
                VISA
              </div>
            </div>

            {/* PayPal Option - Visually unchecked,  */}
            <div className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-300 hover:border-gray-400 max-w-xs">
              <div className="flex items-center">
                {/* Custom Checkbox-like appearance - visually unchecked */}
                <input
                  type="checkbox"
                  checked={false}
                  readOnly
                  className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mr-2"
                />
                <div className="flex flex-col items-start">
                  <span className="text-gray-700 font-medium">347809</span>
                  <span className="text-sm text-gray-500">Paypal Edit</span>
                </div>
              </div>
              {/* PayPal Logo SVG */}
              <svg
                className="w-12 h-8"
                viewBox="0 0 100 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.27 49.38c-1.3-.8-2.1-1.9-2.1-3.3 0-1.4.8-2.5 2.1-3.3l1.8-1.1c.3-.2.6-.3.9-.3.3 0 .6.1.9.3l11.4 6.8c.6.4 1.3.6 2.1.6.8 0 1.5-.2 2.1-.6l11.4-6.8c.3-.2.6-.3.9-.3.3 0 .6.1.9.3l1.8 1.1c1.3.8 2.1 1.9 2.1 3.3 0 1.4-.8 2.5-2.1 3.3l-1.8 1.1c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L32.67 52.8c-.6-.4-1.3-.6-2.1-.6-.8 0-1.5.2-2.1.6L20.27 49.38zM80.7 21.8c-1.3-.8-2.1-1.9-2.1-3.3 0-1.4.8-2.5 2.1-3.3l1.8-1.1c.3-.2.6-.3.9-.3.3 0 .6.1.9.3l11.4 6.8c.6.4 1.3.6 2.1.6.8 0 1.5-.2 2.1-.6l11.4-6.8c.3-.2.6-.3.9-.3.3 0 .6.1.9.3l1.8 1.1c1.3.8 2.1 1.9 2.1 3.3 0 1.4-.8 2.5-2.1 3.3l-1.8 1.1c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L80.7 21.8z"
                  fill="#003087"
                />
                <path
                  d="M60.5 17.5c-1.3-.8-2.1-1.9-2.1-3.3 0-1.4.8-2.5 2.1-3.3l1.8-1.1c.3-.2.6-.3.9-.3.3 0 .6.1.9.3l11.4 6.8c.6.4 1.3.6 2.1.6.8 0 1.5-.2 2.1-.6l11.4-6.8c.3-.2.6-.3.9-.3.3 0 .6.1.9.3l1.8 1.1c1.3.8 2.1 1.9 2.1 3.3 0 1.4-.8 2.5-2.1 3.3l-1.8 1.1c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L60.5 17.5z"
                  fill="#009CDE"
                />
                <path
                  d="M40.2 17.5c-1.3-.8-2.1-1.9-2.1-3.3 0-1.4.8-2.5 2.1-3.3l1.8-1.1c.3-.2.6-.3.9-.3.3 0 .6.1.9.3l11.4 6.8c.6.4 1.3.6 2.1.6.8 0 1.5-.2 2.1-.6l11.4-6.8c.3-.2.6-.3.9-.3.3 0 .6.1.9.3l1.8 1.1c1.3.8 2.1 1.9 2.1 3.3 0 1.4-.8 2.5-2.1 3.3l-1.8 1.1c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L40.2 17.5z"
                  fill="#0079C1"
                />
              </svg>
            </div>

            {/* New users Option  */}
            <div className="flex flex-col items-center justify-center p-3 rounded-lg border-2 border-gray-300 hover:border-gray-400">
              {/* Plus icon */}
              <svg
                className="w-10 h-10 text-purple-600 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              <span className="text-gray-700 font-medium">New users</span>
            </div>
          </div>

          {/* Cardholder Name - */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {" "}
            {/* Added grid container */}
            <div>
              {" "}
              <label
                htmlFor="cardholderName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Card holder name
              </label>
              <input
                type="text"
                id="cardholderName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="John Walden"
                readOnly
              />
            </div>
            {/* Empty div to take up the second column,  */}
            <div className="hidden sm:block"></div>
          </div>

          {/* Billing Address -  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {" "}
            <div>
              <label
                htmlFor="billingAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Billing address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="billingAddress"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Germany"
                  readOnly // Make it non-functional
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            {/* Empty div to take up the second column, keeping alignment */}
            <div className="hidden sm:block"></div>
          </div>

          {/* Zip code and City -  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Zip code
              </label>
              <input
                type="text"
                id="zipCode"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="6789123"
                readOnly
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Britain"
                readOnly
              />
            </div>
          </div>

          {/* Invoice Address Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="invoiceAddress"
              className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
              checked={true}
              readOnly
            />
            <label
              htmlFor="invoiceAddress"
              className="ml-2 block text-sm text-gray-900"
            >
              Invoice Address
            </label>
          </div>

          {/* Pay Button */}
          <button
            className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold"
            disabled
          >
            Pay $67.00
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
