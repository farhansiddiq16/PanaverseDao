
"use client"

import Button from "@/components/lay/Button"
import Image from "next/image"
import DataST from "@/components/sectionsHome/DataST"
import { useState } from "react"

export default function SpecializedTracks() {


    const [selectedItem, setSelectedItem] = useState("WMS")

    const selectedItemData = DataST.find((item) => item.slug === selectedItem)



    return (

        <section className="mx-w-screen-xl mx-auto py-6 px-3 mt-12  ">

            {/* left side */}

            <div className="">

                <div>
                    <h1 className="font-bold text-gray-800 text-2xl sm:text-4xl mt-2 "> Specialized Tracks:</h1>
                    <p className="text-gray-700 mt-3 max-w-screen-md"> After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                </div>


                <div className="flex flex-col-reverse lg:flex-row gap-5 mt-6 ">

                    <div className="border shadow-xl sticky top-20 rounded-xl self-start  px-5 py-12 basis-8/12 bg-gray-100 ">
                        <h4 className="text-blue-950 font-bold text-lg "> Specialized Track </h4>
                        <h3 className="font-bold text-gray-800 text-xl sm:text-2xl mt-2"> {selectedItemData?.header}</h3>
                        <p className="text-gray-700 mt-5 text-justify"> {selectedItemData?.description}.</p>

                        <Button text="Learn More" />

                        {/* Quarter Box */}

                        <div className="mt-5 flex flex-col md:flex-row gap-5">
                            {
                                selectedItemData?.quarter.map((item, i) => (


                                    <div key={i} className="border rounded-md px-8 py-12 flex-1 relative bg-white -z-10">
                                        <h4 className="font-bold text-lg text-gray-800"> Quarter IV </h4>
                                        <p className="text-gray-700 mt-2"> {item.description} </p>
                                        <div className="absolute -top-5 right-10 -z-10 text-[100px] md:text-[140px] font-bold text-gray-300 "> {item.number} </div>
                                    </div>

                                )

                                )
                            }




                        </div>


                    </div>

                    {/* Right side */}

                    <div className=" basis-4/12 -mt-1 py-3 px-2 flex-1 space-y-8 bg-gray-100 rounded-lg ">
                        {
                            DataST.map((item, i) => (
                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-2 items-center cursor-pointer ">

                                    <div className=" flex-shrink-0 ">
                                        <Image src={item.image} alt="" className=" h-24 w-36 object-cover rounded-md " />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-orange-600">Specialized Track </h3>
                                        <p className="font-semibold text-sm"> {item.header}</p>
                                    </div>



                                </div>
                            ))

                        }



                    </div>


                </div>


            </div>


        </section>

    )



}