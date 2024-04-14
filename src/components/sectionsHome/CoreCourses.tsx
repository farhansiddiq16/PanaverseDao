

import Button from "../lay/Button"


// Arracy function  is used for multiple date

const CoreCoursesData = [
    {
        header: "Quarter I",
        description: "CS-101: Object Oriented Programming using TypeScript",
        number: 1
    },
    {
        header: "Quarter II",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 2
    },
    {
        header: "Quarter III",
        description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number: 3
    }

]




export default function CoreCourses() {

    return (



        <section className="mx-w-screen-xl mx-auto py-6 px-3 mt-12  ">


            <div>
                <h4 className="text-blue-950 font-bold text-lg mt-5"> Program of Studies </h4>
                <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl mt-2"> Core Courses <br /> (Common in All Specializations) </h1>
                <p className="text-gray-700 mt-5" > Every participant of the program will start by completing the following three core courses.
                </p>
            </div>

            <div>
                <Button text="Enroll Now" />
            </div>


            {/* Boxes */}

            {/* using map function to get multipe data from array */}




           <div className="flex flex-col md:flex-row mt-10 gap-5">

                {
                    CoreCoursesData.map((item, i) => {

                        return (

                    
                                
                            <div className="border rounded-md px-8 py-7 flex-1 relative">

                                <h4 className="font-bold text-lg text-gray-800"> {item.header} </h4>
                                <p className="text-gray-700 mt-2"> {item.description} </p>
                                <div className="absolute -top-5 right-10 -z-10 text-[100px] md:text-[140px] font-bold text-gray-300 "> {i + 1} </div>
                            </div>
                        )

                    }
                    )
                }

            </div>


            
               
          








        </section >


    )
}



