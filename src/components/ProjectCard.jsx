import {useState} from 'react'

function ProjectCard(props) {
    const [showDetails, setShowDetails]=useState(false); 
    
function toggleDetails() {
    setShowDetails(!showDetails);
}

  return (
        <>
    <article className="project-card rounded-xl border border-stone-300 bg-white p-6 text-slate-900 shadow-sm sm:p-8">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-[#0B0614]">{props.title}</h3>
          <p className="mt-3 text-base leading-7 text-[#342E3B]">{props.description}</p>
          <button type="button" onClick={toggleDetails} aria-expanded={showDetails} className="rounded-full border px-5 py-2.5 font-semibold focus-visible:outline-2 mt-5 text-sm cursor-pointer border-[#BA3424] text-[#BA3424] hover:bg-[#BA3424] hover:text-white transition-colors duration-200 focus-visible:outline-offset-2 focus-visible:outline-[#BA3424]">{showDetails? "Hide Details":"View Details"}</button>
            <div className="border-stone-200 grid grid-rows-[0fr] data-[open=true]:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none" data-open={showDetails} aria-hidden={!showDetails}>
               <div className="overflow-hidden min-h-0">
                <div className="mt-5 border-t border-stone-200 pt-4">
                <p className="pt-4">{props.details}</p>
                </div>
          </div>
           </div>   
        
        </div>
    </article>

 
    </>
  )
}




export default ProjectCard