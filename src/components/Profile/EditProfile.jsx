import ProfileUpload from "./ProfileUpload";
import { useProfile } from "../../context/ProfileContext";
import { useState } from "react";
import { Link } from "react-router";

const EditProfile = () => {
  const { profile, updateProfile } = useProfile();
  const [localImage, setLocalImage] = useState(null);
  const [localEmail, setLocalEmail] = useState(profile.email);
  const [localName, setLocalName] = useState(profile.name);
  const [localphone, setLocalPhone] = useState(profile.phone);
  const [localOccupation, setLocalOccupation] = useState(profile.occupation);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile({
      email: localEmail,
      name: localName,
      occupation: localOccupation,
      phone: localphone,
    });
  };

  return (
    <div
      className="text-black px-6 py-9 w-full h-screen "
      style={{ backgroundColor: "#F2FAFF" }}
    >
      <h2
        className=" flex gap-2 font-bold-300 text-2xl text-[#1A91F0] px-2 py-2 w-[50%] md:w-[15%] rounded"
        style={{ border: "1px solid #1A91F0" }}
      >
        <svg
          className="w-7 h-7 text-[#1A91F0]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9.24264 18.9967H21V20.9967H3V16.754L12.8995 6.85453L17.1421 11.0972L9.24264 18.9967ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path>
        </svg>
        Edit Profile
      </h2>

      <form className="mt-10 text-black" onSubmit={handleSubmit}>
        <ProfileUpload />
        <div className="mt-10">
          <div className="">
            Name
            <br />
          </div>
          <input
            type="text "
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
            className="border-1 w-full px-4 py-2 mt-3 mb-5 rounded"
          />

          <div>
            E-mail <br />
          </div>
          <input
            type="email"
            value={localEmail}
            onChange={(e) => setLocalEmail(e.target.value)}
            className="border-1 w-full px-4 py-2 mt-3 mb-5 rounded"
          />

          <div>
            Phone number <br />
          </div>
          <input
            type="number"
            value={localphone}
            onChange={(e) => setLocalPhone(e.target.value)}
            className="border-1 w-full px-4 py-2 mt-3 mb-5 rounded"
          />

          <div>
            Occupation <br />
          </div>
          <select
            value={localOccupation}
            onChange={(e) => setLocalOccupation(e.target.value)}
            className="border-1 w-full px-4 py-2 mt-3 mb-5  rounded"
          >
            <option value="Software Developer">Software Developer</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Designer">Designer</option>
            <option value="Project Manager">Project Manager</option>
          </select>
        </div>

        <div className="flex justify-center mt-5 gap-10">
          <Link
            className="border-1 px-4 py-2 border-[#1A91F0] text-[#1A91F0] rounded"
            to={"/"}
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="border-1 px-4 py-2 rounded bg-[#1A91F0] text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
