
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (

        // lg:flex px-2 py-5 grid-cols-3 gap-x-14 lg:px-20 xl:px-40

    <section className=" max-w-screen-xl mx-auto  bg-white mt-5">

        <div className="lg:flex px-2 py-5 grid-cols-3 gap-x-28 lg:px-15 ">

            <div>
                <div>
                    <Image src={"/pictures/logo.jpeg"} alt="Panaverse Dao" width={150} height={500} />
                </div>
            
                <p className="mt-8 w-96 xl:w-[470px] ">Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>

            </div>



            <div className="mt-6 cursor-pointer">
                <h4 className="font-bold "> Programs </h4>

                <div className="mt-3 space-y-1 ">
                <div>Web 3.0 and Metaverse Developer</div>
                <div>Artificial Intelligence</div>
                <div>Cloud-Native Computing</div>
                <div>Ambient Computing and IoT</div>
                <div>Genomics and Bioinformatics</div>
                <div>Network Programmability and Automation</div>
                </div>
            </div>




            <div className="mt-6 cursor-pointer">

                <h4 className="font-bold "> Pages </h4>

                <div className="mt-3 space-y-1">
                <div>Home</div>
                <div>Quarter 1</div>
                <div>Quarter 2</div>
                <div>Quarter 3</div>

            </div>





            </div>

        </div>

        </section>


    )

}