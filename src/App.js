import './App.css';
import Header from './Header/Header.js';
import Articles from './Articles/Articles.js';
import Line from './Line/line.js';
import React from "react";


function App() {
  const [data, setdata] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setdata(data.message)); 
  }, []);

  return (
    <div className="App">
      <Header/>
      <Line/>
      <Articles/>
    </div>
  );
}

export default App;
