import { useState } from "react";

import NoProjectsComponent from "./components/NoProjects/NoProjects.component";
import SideBar from "./components/Sidebar/Sidebar.component";
import CreateProject from "./components/CreateProject/CreateProject.component";

function App() {
  const [createProject, setCreateProject] = useState(false);
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects"))
  );
  const [selectedProject, setSelectedProject] = useState(null);

  let handleSetCreateProject = () => {
    setCreateProject((oldState) => {
      return !oldState;
    });
  };

  let handleSetProjects = (projects) => {
    setProjects((oldState) => {
      return projects;
    });
  };

  let handleSelectedProject = (project) => {
    if (!project) {
      return;
    }
    setSelectedProject(project);
    setCreateProject(true);
  };

  return (
    <>
      <main className=" h-screen w-screen grid grid-cols-4 ">
        <section className="sidebar h-9/10 grid self-end ">
          <SideBar
            handleSetCreateProject={handleSetCreateProject}
            handleSelectedProject={handleSelectedProject}
            projects={projects}
          />
        </section>
        <section className="projects grid grid-cols-1 place-items-center col-span-3">
          {!createProject && (
            <NoProjectsComponent createProject={handleSetCreateProject} />
          )}

          {createProject && (
            <CreateProject
              handleSetCreateProject={handleSetCreateProject}
              handleSetProjects={handleSetProjects}
              selectedProject={selectedProject}
            ></CreateProject>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
