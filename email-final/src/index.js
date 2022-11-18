import EmailBox from './component/email_v1';
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
    <div className="App">
      <EmailBox />
      {/* <Email /> */}
    </div>

  );
  // return <Calendar />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
