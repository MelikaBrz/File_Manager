// import Calendar from "../src/components/calendar";
import React from 'react';
import ReactDOM from 'react-dom';
import FileItem from './component/fileItem';
import FileManager from './component/fileManager';
import FileViewer from './component/fileViewer';
import FolderItem from './component/folderItem';
import TopNavBar from './component/topNavBar';
function App() {

  let db = {
    "New Folder":
    {
      date: '321321',
      content: [
        {
          name: "file1.png",
          volume: 15,
          date: "4545"
        },
        {
          name: "file2.png",
          volume: 18,
          date: "4545"
        }
      ]
    }
  }

  return (
    <div>

      <FileManager db={db} />
      {/* <TopNavBar /> */}
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);