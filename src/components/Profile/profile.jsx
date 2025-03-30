import ProfileUpload from "./ProfileUpload";
import { useProfile } from "../../context/ProfileContext";
import bgImage from "/background.jpg";
import { Link } from "react-router";
const Profile = () => {
  const { profile, updateProfile } = useProfile();

  return (
    <div className="  w-full h-screen " style={{ backgroundColor: "#F2FAFF" }}>
      <div
        className="w-full  bg-cover bg-center px-4 py-5"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* <h2 className=" flex gap-2 font-bold-300 text-2xl text-[#1A91F0] px-2 py-2 w-[40%] md:w-[10%] rounded"  
            style={{border:'1px solid #1A91F0'}}> 
            <svg  className="w-7 h-7 text-[#1A91F0]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
             Profile</h2> */}

        <div className="flex gap-30 lg:gap-165 font text-2xl text-white">
          <Link to={"/"} className="w-7 h-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
            </svg>
          </Link>

          <div className="">Profile</div>
        </div>

        <div className=" flex justify-center  mt-10 pb-10">
          <img
            src={profile.image || "https://via.placeholder.com/150"} // Fallback image if no image is uploaded
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-2 border-[#1A91F0]"
          />
        </div>
      </div>

      <div className=" rounded-t-3xl px-8 py-5 lg:px-130">
        {/* dispaly user data */}
        <div className="mt-7 space-y-4">
          <div className="flex">
            <div className="w-10 h-10 bg-[#92ceff] px-2 py-2 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1961c5"
              >
                <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
              </svg>
            </div>

            <div className="ml-4">
              <h2 className="text-[#1961c5] text-[20px]">{profile.name}</h2>
              <h3 className="text-[13px] ">Profile name</h3>
            </div>
          </div>

          <div className="flex">
            <div className="w-10 h-10 bg-[#92ceff] px-2 py-2 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1961c5"
              >
                <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
              </svg>
            </div>

            <div className="ml-4">
              <h2 className="text-[#1961c5] text-[20px]">
                +91 {profile.phone}
              </h2>
              <h3 className="text-[13px] ">Phone number</h3>
            </div>
          </div>

          <div className="flex">
            <div className="w-10 h-10 bg-[#92ceff] px-2 py-2 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1961c5"
              >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
              </svg>
            </div>

            <div className="ml-4">
              <h2 className="text-[#1961c5] text-[20px]">{profile.email}</h2>
              <h3 className="text-[13px] ">E-mail</h3>
            </div>
          </div>

          <div className="flex">
            <div className="w-10 h-10 bg-[#92ceff] px-2 py-2 rounded-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1961c5"
              >
                <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM6 13V7H4V13H6ZM8 7V13H11V11H13V13H16V7H8ZM18 13H20V7H18V13ZM9 3V5H15V3H9Z"></path>
              </svg>
            </div>

            <div className="ml-4">
              <h2 className="text-[#1961c5] text-[20px]">
                {profile.occupation}
              </h2>
              <h3 className="text-[13px] ">Occupation</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to={"/editProfile"}
            className="border-1 px-10 py-2 mt-10 rounded text-[#1961c5] border-[#1961c5]"
          >
            {" "}
            Edit{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
