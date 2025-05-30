import { FaUpload } from "react-icons/fa";

export default function SettingDetails() {
  return (
    <div className="max-w-[120rem] mx-auto my-[30px]">
      <SettingHeading />
      <Content />
    </div>
  );
}

function SettingHeading() {
  return (
    <div className="flex justify-between items-start w-full">
      <div className="flex flex-col items-start mb-[0.5rem] p-[2rem]">
        <h1 className="mb-[0.5rem]">Setting Details</h1>
        <span className="text-[1.2rem] text-[#777]">
          Update your photo and personal details here
        </span>
      </div>
      <div className="flex justify-end">
        <button className="inline-flex w-max justify-center py-[0.75rem] px-[1.2rem] rounded-[0.4rem] border border-white ml-[0.8rem]">
          Cancel
        </button>
        <button className="inline-flex w-max justify-center py-[0.75rem] px-[1.2rem] rounded-[0.4rem] border border-white ml-[0.8rem] bg-purple-800 text-white">
          Save
        </button>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="grid grid-cols-[70%_1fr] gap-[2rem] mt-[2rem]">
      <Main />
      <Aside />
    </div>
  );
}

function Main() {
  return (
    <main className="bg-white rounded-[10px]">
      <form className="form">
        <h2 className="p-[2rem] border-b-2 border-[#f4f5f9]">
          Personal Information
        </h2>
        <div className="flex flex-col gap-[3rem] p-[2rem]">
          <div className="grid grid-cols-2 gap-[2rem]">
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="fname"
              >
                Full Name
              </label>
              <input
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-[0.3s]"
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="lname"
              >
                Last Name
              </label>
              <input
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-[0.3s]"
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[2rem]">
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-[0.3s]"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-[0.3s]"
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[2rem]">
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="phone"
              >
                Phone No
              </label>
              <input
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-[0.3s]"
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                placeholder="Enter phone no"
              />
            </div>
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-[0.3s]"
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[2rem]">
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="countryname"
              >
                Country Name
              </label>
              <input
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-[0.3s]"
                type="text"
                id="countryname"
                name="countryname"
                placeholder="Enter country name"
              />
            </div>
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="zipcode"
              >
                Zip Code
              </label>
              <input
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-[0.3s]"
                type="text"
                id="zipcode"
                name="zipcode"
                placeholder="Enter zip code"
                pattern="[0-9]{5}"
                title="5-digit zip code"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[2rem]">
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="bio"
              >
                Bio <span>(Write a short introduction)</span>
              </label>
              <select className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[2px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9]">
                <option value="normal">Normal</option>
              </select>
            </div>
          </div>
          <p className="text-[1rem] text-inherit rounded-[5px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] p-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            maximus, metus sed venenatis convallis, sem purus ornare ipsum, ac
            feugiat magna lorem in purus. Phasellus iaculis quam ullamcorper
            nibh gravida, at blandit ipsum ornare. In luctus lacinia mi sed
            pharetra.
          </p>
          <div className="grid grid-cols-2 gap-[2rem]">
            <div>
              <label
                className="block text-[1.2rem] font-bold mb-[0.7rem]"
                htmlFor="timezone"
              >
                Timezone
              </label>
              <select
                id="timezone"
                className="w-full block text-[1.5rem] font-inherit text-inherit p-[1rem_1.5rem] rounded-[2px] bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9]"
              >
                <option value="PST">Pacific Standard Time</option>
                <option value="MST">Mountain Standard Time</option>
                <option value="CST">Central Standard Time</option>
                <option value="EST">Eastern Standard Time</option>
                <option value="AKST">Alaska Standard Time</option>
                <option value="HST">Hawaii Standard Time</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

function Aside() {
  return (
    <aside className="rounded-[10px]">
      <h2 className="p-[2rem] bg-white rounded-[10px_10px_0_0] border-b-2 border-[#f4f5f9]">
        Your Photo
      </h2>
      <div className="flex flex-col bg-white pr-[2rem] pl-[2rem]">
        <div className="person">
          <div className="profile">
            <img src="" alt="" />
            <div className="edit">
              <h4 className="text-[1.2rem]">Edit your photo</h4>
              <button className="bg-[rgba(237,223,223,0.886)] text-[rgb(99,95,99)] py-[0.25rem] px-[0.25rem] rounded-[0.4rem] mt-[0.5rem]">
                Delete
              </button>
            </div>
          </div>
          <div className="text-center font-[Arial,sans-serif] mt-[2rem]">
            <input
              type="file"
              id="file-upload"
              accept=".svg,.png,.jpg,.jpeg,.gif"
              hidden
            />
            <label
              htmlFor="file-upload"
              className="block border border-dashed border-purple-600 rounded-[8px] p-[6rem_4rem] cursor-pointer transition-all duration-[0.3s] hover:bg-[#f9f9f9] hover:border-[#999]"
            >
              <div className="text-[#555]">
                <FaUpload size="1.5em" className="mr-[8px] inline" />
                <span className="text-purple-600">Click to upload</span> or drag
                and drop
                <br />
                <small className="text-[#888] text-[0.9em]">
                  SVG, PNG, JPG or GIF (max. 800×400px)
                </small>
              </div>
            </label>
            <p className="mt-[10px] text-[0.9em] text-[#666]" id="file-name">
              No file selected
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start w-full mb-[1rem] p-[1rem]">
          <img
            src="./Google_2015_logo.svg.png"
            alt="Google Logo"
            className="w-[60px]"
          />
          <button className="bg-[rgba(237,223,223,0.886)] text-[rgb(99,95,99)] py-[0.25rem] px-[1.2rem] rounded-[0.4rem]">
            Connected
          </button>
        </div>
        <p className="text-[1.3rem]">
          Use google to sign into your account{" "}
          <a href="https://www.google.com" className="text-blue-500">
            Click here to learn more
          </a>
        </p>
      </div>
    </aside>
  );
}

function Button({ children }) {
  return (
    <button className="py-[1rem] px-[1.5rem]" type="button">
      {children}
    </button>
  );
}
