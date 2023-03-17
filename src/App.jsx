import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="text-center selection:bg-green-900">
      <ol>
        {users.map(({ id, name }) => (
          <li>{`${id} - ${name}`}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
