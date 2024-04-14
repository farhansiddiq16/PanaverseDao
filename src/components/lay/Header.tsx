
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (

        

      
            <div className="flex justify-between py-3 px-2 max-w-screen-xl mx-auto items-center sticky top-0 z-10 bg-white ">

                {/* logo */}
                <div>
                    <Image src={"/pictures/logo.jpeg"} alt="Panaverse Dao" width={100} height={100} />
                </div>


                {/* Navigation */}

                <div>

                    <ul className="flex gap-8  text-blue-900 font-bold">
                        <li> <Link href={"/"}> Home </Link> </li>


                        <li> <Link href={"/courses"}>Courses</Link> </li>

                    </ul>


                </div>

            </div>

           
            

    )

}