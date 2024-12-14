import { FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

function Project({project}){
    return <div className="flex flex-col text-stone-800 tablet_w:max-w-[25rem] laptop:h-[30rem] bg-slate-200 rounded-lg overflow-hidden">
        <div>
            <img src={project.imgPath} alt="project view" />
        </div>
        <p className="font-bold text-lg pt-2 pl-3">{project.name}</p>
        <div className="flex flex-col justify-between gap-4 grow m-3">
            <p>{project.description}</p>
            <div className="flex gap-4">
                <a href={project.browserLink}><SlGlobe size="30"/></a>
                <a href={project.gitLink}><FaGithub size="30"/></a>
            </div>
        </div>
    </div>
}

export default Project;