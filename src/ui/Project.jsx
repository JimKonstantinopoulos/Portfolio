import { FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

function Project({project}){
    return <div className="flex flex-col text-stone-800 w-[28rem] h-[30rem] bg-slate-200 rounded-lg overflow-hidden">
        <div>
            <img src={project.imgPath} alt="project view" />
        </div>
        <div className="flex flex-col justify-between gap-4 grow m-3">
            <p>{project.description}</p>
            <div className="flex gap-2">
                <a href={project.browserLink}><SlGlobe size="30"/></a>
                <a href={project.gitLink}><FaGithub size="30"/></a>
            </div>
        </div>
    </div>
}

export default Project;