import { useProjectsValue } from "../context";
import Projects from "./Projects";

function ProjectList({ setProject }) {
  const { projects } = useProjectsValue();
  return (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        {projects.map((project) => (
          <li>
            <div onClick={() => setProject(project)} style={{ width: "200px" }}>
              <span
                style={{
                  backgroundColor: project.color,
                  width: "10px",
                  height: "10px",
                  borderRadius: "5px",
                }}
              ></span>
              {project.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
