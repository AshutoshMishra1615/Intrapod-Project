import './Temp1.css'
import profile from './profile.jpeg'
const Temp1 = () => {
    return (
        <div className="bg-gray-100">
          
            <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
                <header className="flex items-center space-x-4 bg-[#FFFFF0]">
                    <img src={profile} alt="Profile Picture" className="w-24 h-24 rounded-full border-black-1" />
                    <div>
                        <h1 className="text-3xl font-bold">Your Name</h1>
                        <p className="text-gray-600">Professional Title</p>
                    </div>
                </header>
                <section className="mt-6">
                    <h2 className="text-xl font-semibold underline">Profile:</h2>
                    <h4 className="font-medium">Phone No.- </h4>
                    <h4 className="font-medium">Email Id - </h4>
                    <h4 className="font-medium">LinkedIn Id - </h4>
                    

                    <p className="text-gray-600">A brief summary about yourself.</p>
                </section>
                <section className="mt-6">
                    <h2 className="text-xl font-semibold underline">Experience:</h2>
                    <div className="mt-2">
                        <h3 className="font-medium">Job Title - </h3>
                        <h3 className="font-medium">Company-</h3>
                        <p className="text-gray-600">Description of responsibilities and achievements.</p>
                    </div>
                </section>
                <section className="mt-6">
                    <h2 className="text-xl font-semibold underline">Education:</h2>
                    <div className="mt-2">
                        <h3 className="font-medium">Degree - </h3>
                        <h3 className="font-medium">University - </h3>
                        <p className="text-gray-600">Additional details.</p>
                    </div>
                </section>
                <section className="mt-6">
                    <h2 className="text-xl font-semibold underline">Skills:</h2>
                    <p className="text-gray-600">Skill 1, Skill 2, Skill 3</p>
                </section>
            </div>
        
       </div>
    );
}
 
export default Temp1;