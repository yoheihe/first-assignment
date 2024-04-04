import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [pets, setPets] = useState(["しば犬", "秋田犬", "ポメラニアン", "チワワ"]);
  const [member, setMember] = useState([
    {id: 1, name: 'しば犬'},
    {id: 2, name: '秋田犬'},
    {id: 3, name: 'ポメラニアン'},
    {id: 4, name: 'チワワ'},
  ]);

  return (
    <div className="container" key={member.id}>
      {member.map((member) => {
        return (
          <div className="member" key={member.id}>
            <p>member.name</p>
            </div>
        );
      })}
      </div>
  )

  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me
  //     </button>
  //   </div>
  // );
}

export default App;
