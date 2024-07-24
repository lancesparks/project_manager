import { useState, useRef, useEffect } from "react";

const CreateProject = ({
  handleSetCreateProject,
  handleSetProjects,
  selectedProject,
}) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveProject = () => {
    let newProject = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    if (newProject.title === "") {
      handleSetCreateProject();
      return;
    }

    const allProjects = JSON.parse(localStorage.getItem("projects"));
    const filteredProjects = handleAddingProject(allProjects, newProject);

    localStorage.setItem("projects", JSON.stringify(filteredProjects));
    handleSetProjects(filteredProjects);
    handleSetCreateProject();
  };

  const handleAddingProject = (allProjects, newProject) => {
    if (!allProjects) {
      return [newProject];
    }
    const projects = allProjects.filter(
      (project) => project.title !== newProject.title
    );

    return [...projects, newProject];
  };

  return (
    <div className="grid gap-y-5 relative bottom-[10%] w-3/4 px-10">
      <div className="button flex justify-end w-3/4">
        <button
          className="mr-10 uppercase uppercase rounded px-5 py-2 hover:text-white hover:bg-black "
          onClick={handleSetCreateProject}
        >
          cancel
        </button>
        <button
          className="uppercase rounded px-5 py-2 hover:text-white hover:bg-black "
          onClick={saveProject}
        >
          save
        </button>
      </div>
      <div className="title">
        <h1 className="uppercase mb-4">title</h1>
        <input
          key={selectedProject?.title}
          defaultValue={selectedProject?.title}
          ref={title}
          className="bg-stone-300 rounded py-2 px-4 w-3/4"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="description">
        <h1 className="uppercase mb-4">description</h1>
        <textarea
          key={selectedProject?.description}
          defaultValue={selectedProject?.description}
          ref={description}
          className="bg-stone-300 rounded py-2 px-4 w-3/4"
          name=""
          id=""
        ></textarea>
      </div>
      <div className="dueDate">
        <h1 className="uppercase mb-4">due date</h1>
        <input
          key={selectedProject?.dueDate}
          defaultValue={selectedProject?.dueDate}
          ref={dueDate}
          type="date"
          className="bg-stone-300 rounded py-2 px-4 w-3/4"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default CreateProject;
