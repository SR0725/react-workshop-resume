import Header from "./components/header";
import Previewer from "./components/previewer";
import Editor from "./components/editor";
import useResume from "./hooks/useResume";
import "./App.scss";

function App() {
  const resumeHandler = useResume();

  return (
    <div className="app">
      <Header />
      <main>
        <Editor {...resumeHandler} />
        <Previewer
          name={resumeHandler.name}
          gender={resumeHandler.gender}
          skills={resumeHandler.skills}
          resume={resumeHandler.resume}
        />
      </main>
    </div>
  );
}

export default App;
