import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);
  useEffect(() => {
    async function fetchRepos(){
      const gitRepos = await fetch("https://api.github.com/users/alyaxi/repos");
      const data = await gitRepos.json();
      console.log(data);
      setRepos(data)

    }
    fetchRepos()

    // fetch('https://api.github/alyaxi')
    // .then(response => response.json())
    // .then(json => {
    //   setData(json)
    // })
  },[]);
  return (
    <div>
      <h1 className="text-center">You are seeing on my All Repositires</h1>
      <ul>
        {repos.map((repoObject, ind) => {
          return(<li key={ind}>{repoObject.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
