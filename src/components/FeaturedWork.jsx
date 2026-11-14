import ProjectCard from './ProjectCard.jsx'

function FeaturedWork() {
 

  return (
        <>
    <section id="featured-work" className="py-16 px-8">
        <div className="w-full max-w-6xl mx-auto">
          <h2>Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard title="Kingsbridge University" description="A modern university website concept designed to connect academic discovery, campus culture, and student resources through a responsive, accessible digital experience." details="Explores accessible navigation, responsive academic layouts, program discovery, and a connected student experience. Additional project details: responsive design, accessible navigation, academic content and student experience."/>
            <ProjectCard title="The Sound of Becoming" description="An immersive music website concept blending artist storytelling, expressive visual design, and intuitive navigation to create a compelling digital home for music and creative identity." details="Explores artist storytelling, immersive visual identity, music discovery, and responsive digital experiences. Additional project details: artist identity, music discovery, visual storytelling and responsive interfaces."/>
          </div>
       
        </div>
    </section>

 


    </>
  )
}



export default FeaturedWork