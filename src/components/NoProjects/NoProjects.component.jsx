import noProjects from "../../assets/no-projects.png";

const NoProjectsComponent = ({ createProject }) => {
  return (
    <>
      <div className="noProject grid place-items-center relative bottom-[10%] gap-6">
        <img className="h-20 w-20 " src={noProjects} alt="" />
        <h1 className="text-3xl font-bold text-gray-700">
          No Projects selected
        </h1>
        <p className="text-lg text-gray-500">
          Select a project or get started with a new one
        </p>
        <button
          className="text-lg bg-black text-gray-400 px-4 py-2 rounded-lg"
          onClick={createProject}
        >
          Create new project
        </button>
      </div>
    </>
  );
};

export default NoProjectsComponent;
