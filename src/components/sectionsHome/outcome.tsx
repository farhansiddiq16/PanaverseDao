

import Image from "next/image"
import outcome from "../../../public/pictures/outcome.webp"

export default function Outcome() {
    return (

        <section className="mx-w-screen-xl mx-auto py-6 px-3 mt-14 ">


            <div className="flex gap-x-8 items-center lg:flex-row flex-col-reverse">

                <div className="mt-10 lg:mt-0 ">
                    <Image src={outcome} alt="" />
                </div>

                <div className="flex-1">

                    <h2 className="text-5xl font-bold text-gray-900">The Outcome for Participants of the Program</h2>

                    <p className="mt-5 text-xl text-slate-700 text-justify"> As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>

                    <div className="mt-6 text-lg font-bold text-blue-950 ">

                        <h3>1- Product Ownership</h3>
                        <h3>2- Freelancing</h3>
                        <h3>3- Boost Economy</h3>
                        <h3>4- Global Marketing by Panaverse DAO</h3>
                        


                    </div>



                </div>

            </div>



        </section>








    )

}




// mx-w-screen-xl mx-auto py-6 px-3


{/* <ul className="mt-5 text-xl text-slate-700">
                        <li> >> Product Ownership</li>
                        <li> >> Freelancing</li>
                        <li> >> Boost Economy</li>
                        <li> >> Global Marketing by Panaverse DAO</li>
                    </ul> */}