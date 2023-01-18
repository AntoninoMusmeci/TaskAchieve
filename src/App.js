import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import { ProjectsProvider, TasksProvider } from "./context";
import "./app.scss";
export const App = () => (
  <ProjectsProvider>
    <TasksProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </TasksProvider>
  </ProjectsProvider>
);
