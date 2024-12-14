import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){
    return <footer className="bg-background w-full flex flex-col gap-3 justify-center items-center text-stone-200 p-7">
        <div className="flex gap-4">
            <a href="mailto:dimkonstantinopoulos@gmail.com"><MdEmail size="30"/></a>
            <a href="https://github.com/JimKonstantinopoulos"><FaGithub size="30"/></a>
            <a href="https://www.linkedin.com/in/dimitris-konstantinopoulos-9a76b5274/"><FaLinkedin size="30"/></a>
        </div>
        <p>Copyright © 2024 Dimitris Konstantinopoulos. All rights reserved.</p>
    </footer>
}

export default Footer;