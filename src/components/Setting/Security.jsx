

import React from 'react';

const SecuritySettings = () => {
  return (
    <div className="min-h-screen font-inter p-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-8">Security Setting</h1>
      
      {/* Two-column layout */}

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-8 ">
        {/* Left Column - Password Section */}
        <div className="bg-white rounded-md shadow-md p-6">
          <section className='bg-white  grid justify-items-start'> 
            <h2 className="text-xl font-semibold mb-2">Password</h2>
            <p className="text-gray-600 mb-8 text-sm">
              The Last Pass password generator creates random <br />passwords based on parameters set by you.
            </p>
            
            <div className="space-y-4">
                <div className=''>
              <h3 className="font-medium">Current password</h3>
              <input 
                type="password" 
                placeholder="Current password" 
                className="w-full p-3 border rounded bg-gray-200"
              />
              </div>
              <h3 className="font-medium">New password</h3>
              <input 
                type="password" 
                placeholder="New password" 
                className="w-full p-3 border rounded bg-gray-200"
              />
            </div>
            
            <div className="space-y-4 mt-6">
              <h3 className="font-medium">Confirm password</h3>
              <input 
                type="password" 
                placeholder="Confirm password" 
                className="w-full p-3 border rounded bg-gray-200"
              />
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-md p-4">
              <h3 className="font-medium">Rules for password</h3>
              <p className="text-gray-600 mt-2">
                To create a new password, you have to meet all of the following requirements.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 text-sm">
                <li>Minimum 8 characters</li>
                <li>At least one special character</li>
                <li>At least one number</li>
                <li>Can't be the same as a previous</li>
              </ul>
            </div>
          </section>
        </div>
        
        {/* Right Column - Devices Section */}
        <div className="bg-white rounded-md shadow-md p-6">
          <section className='bg-white'>
            <h2 className="text-xl font-semibold mb-2">Devices</h2>
            <p className="text-gray-600 mb-4 text-sm">
              The Last Pass password generator creates random passwords based on parameters set by you.
            </p>
            
            <button className="text-white p-2 rounded-md font-medium hover:underline mb-4 bg-purple-600">
              Sign out from all devices
            </button>
            
            <div className="space-y-4 border-t">
              <div>
                <p className="font-medium mt-4">iPhone 11</p>
                <p className="text-gray-500 text-sm">London, UK: Oct12 at 2:30AM</p>
              </div>
              <div>
                <p className="font-medium">Galaxy 18</p>
                <p className="text-gray-500 text-sm">Berlin, Nov23 at 2:30PM</p>
              </div>
              <div>
                <p className="font-medium">Vivo y21</p>
                <p className="text-gray-500 text-sm">London, UK: Oct12 at 2:30AM</p>
              </div>
              <div>
                <p className="font-medium">iPhone 12</p>
                <p className="text-gray-500 text-sm">London, UK: Oct12 at 2:30AM</p>
              </div>
              <div>
                <p className="font-medium">Samsung</p>
                <p className="text-gray-500 text-sm">Karachi, PAK: Oct12 at 2:30AM</p>
              </div>
            </div>
            <div className='bg-gray-300 rounded-md'>
            <p className="flex px-3 py-1.5 rounded-md justify-center p-8 text-gray-600 mt-50">Need help?</p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;