import {useState, useEffect} from "react"

const Projects = (props) =>{

    const [projects, setProjects] = useState(null)

    const getProject =  async () =>{
        const response = await fetch(props.URL + "Projects")
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => getProject(), []);

    const loaded = () => {
        return projects.map((project) => (
          <div className="projectCard">
            <h1>{project.name}</h1>
            <img src={project.image} />
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>Live Site</button>
            </a>
          </div>
        ));
      };

    return projects ? <div className="cards">{loaded()}</div> : <h1>Loading...</h1>
}

export default Projects