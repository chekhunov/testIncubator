import React from 'react';
import './App.css';
import Search from './Search/Search';

function App() {
  // const [users, setUsers] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       setUsers(json.users);
  //     });
  // }, []);

  // console.log(users);

  const users = [
    { id: 1, name: 'item1', age: 23 },
    { id: 2, name: 'item2', age: 24 },
  ];

  const array = [1, 5, 8, 9, 4, 92, 3];
  return (
    <div className="app">
      <Search items={users} array={number} />
    </div>
  );
}

export default App;
