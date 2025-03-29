import profile from './profile.jpeg'
import phone from './phone.jpeg'
import mail from './mail.png'
import loc from './location.png'

const Temp2 = () => {
    return ( 
    
    <div className="flex flex-row ">
        <div className="flex flex-col ml-[3%] w-[95%]  border-r-2 border-l-2">
            <header className="flex flex-col items-start space-x-4 bg-[#FFFFF0]">
                <img src={profile} alt="Profile Picture" className="ml-[40%] mr-[0] w-30 h-30 rounded-full border-black-1 " />
                
                <div className="bg-[#42b3f5] relative left-0 w-[90%] rounded-r-3xl ">
                <h1 className="relative pl-10 text-3xl font-bold text-[white] ">Your Name</h1>
                <p className="relative pl-10  font-bold text-[white]">Professional Title</p>
                </div>

            </header>
            <div className='pt-5'>
                <div className='flex flex-row pl-10'><img src={phone} className="h-8 w-8" alt="phone"></img><span className="text-gray-600">:phone no</span></div>
                <div className='flex flex-row pl-10'><img src={mail} className="h-8 w-8" alt="mail"></img><span className="text-gray-600">:mail id</span></div>
                <div className='flex flex-row pl-10'><img src={loc} className="h-8 w-8" alt="location"></img><span className="text-gray-600">:address</span></div>

            </div>
            <div className="border-t border-gray-400 my-4 m-5">
            <h1 className="pl-10 text-3xl font-bold relative ">Skills:</h1>
            <ul>
                <li className="list-disc list-inside  text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis .</li>
                <li className="list-disc list-inside  text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis .</li>
                <li className="list-disc list-inside  text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis .</li>
                
            </ul>
                
            </div>
            <div className="border-t border-gray-400 my-4 m-5">
            <h1 className="pl-10 text-3xl font-bold ">Language:</h1>
            <ul>
                <li className="list-disc list-inside  text-gray-600">English</li>
                <li className="list-disc list-inside  text-gray-600">Hindi</li>
                <li className="list-disc list-inside  text-gray-600">Telugu</li>
                
                
            </ul>
                
            </div>
            <div className="border-t border-gray-400  ">
               <div className="bg-[#42b3f5] rounded-l-3xl pl-3 border-t text-[white] ml-5 ">
                  <h1 className="  pl-10 text-3xl font-bold text-[white]">Professional Summary:</h1>
               
            
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a</p>
               </div>
               <div className="mt-2 border-t border-gray-400 ml-5 ">
                  <h1 className="pl-10 text-3xl font-bold ">Education:</h1>
                  <h3 className="pl-10  text-gray-600">Degree - </h3>
                  <h3 className="pl-10  text-gray-600">University - </h3>
                  <p className="text-gray-600">Additional details.</p>
               </div>
               <div className="border-t border-gray-400  ml-5">
                    <h1 className="pl-10 text-3xl font-bold ">Experience:</h1>
                    <h2 className="pl-10  text-gray-600 ">Company-</h2>
                    <h3 className="pl-10  text-gray-600 ">Job position-</h3>
                    
                    <ul>
                      <li className="list-disc list-inside  text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis .</li>
                      <li className="list-disc list-inside  text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis .</li>
                      <li className="list-disc list-inside  text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis .</li>
                    </ul>
                
                
                </div>
                <div className="border-t border-gray-400 ml-5 ">
                  <h1 className="pl-10 text-3xl font-bold ">Awards:</h1>
                  <p className="list-disc list-inside  text-gray-600"> Your Acheivements</p>
                </div>

            </div>
           


        </div>
        
            
            
            
        
    </div>

        
    

     );
}
 
export default Temp2;