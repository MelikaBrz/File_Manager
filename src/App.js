import logo from './logo.svg';
import './App.css';
import FileItem from './component/fileItem';
function App() {
  return (
    <div className="App">
      <FileItem name={"image.png"} view = {"detail"} />
    </div>
  );
}

export default App;
