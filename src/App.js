import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import { ProjectsProvider } from "./context";
import "./app.scss";
export const App = () => (
  <ProjectsProvider>
    <div className="App">
      <Header />
      <Content />
    </div>
  </ProjectsProvider>
);
