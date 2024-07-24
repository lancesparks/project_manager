const SideBar = ({
  handleSetCreateProject,
  handleSelectedProject,
  projects,
}) => {
  return (
    <div className="sideBarContainer bg-black rounded-tr-3xl flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-gray-200">Your Projects</h1>
      <button
        className="text-lg bg-stone-700 text-stone-400 px-4 py-2 rounded-lg mt-8"
        onClick={handleSetCreateProject}
      >
        Add Project
      </button>
      <ul className="mt-10">
        {projects &&
          projects.map((project) => {
            return (
              <li
                key={project.title}
                className="mt-4 text-white px-2 py-1 rounded hover:cursor-pointer hover:text-black hover:bg-white"
                onClick={() => handleSelectedProject(project)}
              >
                {project.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SideBar;
