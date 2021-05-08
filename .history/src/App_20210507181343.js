import React from 'react';
import './App.css';
import Search from './Search/Search';

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setUsers(json.users);
      });
  }, []);

  // console.log(users);

  return (
    <div className="app">
      <Search items={users} />
    </div>
  );
}

export default App;
