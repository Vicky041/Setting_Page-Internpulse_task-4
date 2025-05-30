

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 lg:p-10 font-inter">
      <div className="w-full max-w-5xl"> {/* Container for the whole page content */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center sm:text-left">Security Settings</h1>
 
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Left Column - Password Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <section className="grid justify-items-start">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Password</h2>
              <p className="text-gray-600 mb-6 text-sm break-words">
                The Last Pass password generator creates <br /> random passwords based on parameters set by you.
              </p>
 
              
              <div className="mb-4 w-full">
                <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-medium mb-2">
                  Current password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  placeholder="Current password"
                  
                />
              </div>
 
              {/* New Password Input (static) */}
              <div className="mb-4 w-full">
                <label htmlFor="newPassword" className="block text-gray-700 text-sm font-medium mb-2">
                  New password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  placeholder="New password"
                  
                />
              </div>
 
              {/* Confirm Password Input (static) */}
              <div className="mb-6 w-full">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  placeholder="Confirm password"
                  
                />
              </div>
 
              {/* Password Rules Section (static) */}
              <div className="bg-gray-50 p-4 rounded-xl mb-6 w-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Rules for password</h3>
                <p className="text-gray-600 text-sm mb-3">
                  To create a new password, you have to meet all of the following requirements.
                </p>
                <ul className="list-none space-y-2 text-sm">
                  <li className="flex items-center text-gray-600"> 
                    <span className="mr-2">•</span>
                    Minimum 8 characters
                  </li>
                  <li className="flex items-center text-gray-600"> 
                    <span className="mr-2">•</span>
                    At least one special character
                  </li>
                  <li className="flex items-center text-gray-600"> 
                    <span className="mr-2">•</span>
                    At least one number
                  </li>
                  <li className="flex items-center text-gray-600"> 
                    <span className="mr-2">•</span>
                    Can't be the same as a previous
                  </li>
                </ul>
              </div>
 
              
              <button
                
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 text-lg font-semibold"
              >
                Change Password
              </button>
            </section>
          </div>
 
          {/* Right Column - Devices Section (remains as is, was already presentational) */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Devices</h2>
              <p className="text-gray-600 mb-4 text-sm">
                The Last Pass password generator creates random passwords based on parameters set by you.
              </p>
 
              <button className="text-white p-2 rounded-md font-medium hover:bg-purple-700 transition duration-200 mb-4 bg-purple-600">
                Sign out from all devices
              </button>
 
              <div className="space-y-4 border-t pt-4">
                <div>
                  <p className="font-medium">iPhone 11</p>
                  <p className="text-gray-500 text-sm">London, UK: Oct 12 at 2:30 AM</p>
                </div>
                <div>
                  <p className="font-medium">Galaxy 18</p>
                  <p className="text-gray-500 text-sm">Berlin, Nov 23 at 2:30 PM</p>
                </div>
                <div>
                  <p className="font-medium">Vivo y21</p>
                  <p className="text-gray-500 text-sm">London, UK: Oct 12 at 2:30 AM</p>
                </div>
                <div>
                  <p className="font-medium">iPhone 12</p>
                  <p className="text-gray-500 text-sm">London, UK: Oct 12 at 2:30 AM</p>
                </div>
                <div>
                  <p className="font-medium">Samsung</p>
                  <p className="text-gray-500 text-sm">Karachi, PAK: Oct 12 at 2:30 AM</p>
                </div>
              </div>
              <div className='bg-gray-200 rounded-lg mt-8 p-4 flex justify-center items-center'>
                <p className="text-gray-600">Need help?</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}