
import Image from "next/image"
import Button from "@/components/lay/Button"







export default function Hero() {
    return (

        <section className="mx-w-screen-xl mx-auto py-6 px-3 flex flex-col md:flex-row items-center justify-between mt-10 ">

            {/* Left side */}

            <div className="flex-1 ">

                <h4 className="text-blue-950 font-bold text-lg mt-5"> Presidential Initiative for Artificial Intelligence and Computing (PIAIC)  </h4>

                <h1 className="font-bold text-gray-800 text-2xl sm:text-4xl mt-2"> Certified Web 3.0 and Metaverse Developer</h1>

                <p className="text-gray-700 mt-5 text-justify"> A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet. </p>
                <br />

                <p className="text-gray-700 text-justify"> Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </p>

               
                <div>
                    <Button text="Learn More" />

                </div>
                


            </div>


            {/* Right side */}

            <div className="flex-1 mt-5 sm:mt-5 px-5">
                <Image src={"/pictures/AI.jpg"} alt="AI"
                    width={600} height={600} />
            </div>




        </section>



    )

}