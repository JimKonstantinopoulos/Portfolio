import Project from "./Project";

const projectArr = [{
    "imgPath": "../public/crustworthyImg.png",
    "description": "Simple App to order pizzas through a modern SPA web app, using an API to let you select, update, delete and order pizzas. No need to signup for a new user account, just insert your name and you are good to go.",
    "browserLink": "https://crustworthy.netlify.app/",
    "gitLink": "https://github.com/JimKonstantinopoulos/CrustWorthy"
},{
    "imgPath": "../../public/worldwiseImg.png",
    "description": "Track the cities and countries you have visited so far. Using an authentication system to log in, select each city via a user friendly environment, using a clickable map and store them into an interactive list with the ability to comment, delete and track each city back on the map.",
    "browserLink": "https://w0rldwise.netlify.app/",
    "gitLink": "https://github.com/JimKonstantinopoulos/WorldWise"
},{
    "imgPath": "../../public/ratensaveImg.png",
    "description": "Search the movie you wish from a user friendly, authentication free UI, using a simple API, as well as rate and save them to keep track on them every time.",
    "browserLink": "https://rate-n-save.netlify.app/",
    "gitLink": "https://github.com/JimKonstantinopoulos/Rate-n-Save"
},{
    "imgPath": "../../public/forkifyImg.png",
    "description": "Find any recipe you need through a simple UI, by adding either the dish or even one of it's ingredients using a simple API. Dynamic recipes are also produced due to the number of servings option capability. Need more information? An additional link to each recipe window, will take you to a step by step cooking guide website for that specific recipe.",
    "browserLink": "https://forkify-j.netlify.app/",
    "gitLink": "https://github.com/JimKonstantinopoulos/Forkify"
}];

function Content(){
    return <main className="bg-background2 flex flex-col">
        <p className="text-stone-200 text-5xl desktop:text-7xl text-center p-10">Take a look at my projects</p>
        <div className="grid desktop:grid-cols-2 justify-items-center gap-5 p-10">
            {projectArr.map(project => <Project key={project.browserLink} project={project}/>)}
        </div>
    </main>
}

export default Content;