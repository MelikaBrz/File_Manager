// import Calendar from "../src/components/calendar";
import React from 'react';
import ReactDOM from 'react-dom';
// import ContextMenu from './component/contextMenu';
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
      content: {
        "file1.png":
        {
          name: "file1.png",
          volume: 15,
          date: "4545"
        },
        "file2.png":
        {
          name: "file2.png",
          volume: 18,
          date: "4545"
        }
      }
    }
  }

  return (
    <div>
      {/* <ContextMenu/> */}
      <FileManager db={db} />
      {/* <TopNavBar /> */}

      {/* <input   /> */}

    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);