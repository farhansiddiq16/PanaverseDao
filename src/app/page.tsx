
import Hero from "@/components/sectionsHome/Hero"
import CoreCourses from "@/components/sectionsHome/CoreCourses"
import SpecializedTracks from "@/components/sectionsHome/SpecializedTracks"
import Outcome from "@/components/sectionsHome/outcome"





export default function Home() {
  return (


    
    <main className="max-w-screen-xl mx-auto shadow-lg" >

    

     
      <Hero />
      <CoreCourses/>
      <SpecializedTracks/>
      <Outcome/>

     
    </main>

  

  )

}