import React from 'react';
import{useEffect,useState} from"react";



export default function Fetchingdata(){
    const [users, setUsers] = useState([]);

  useEffect(() => {
    // async function getUsers() {
    //   const response = await fetch('https://randomuser.me/api/', {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //     },
    //   });

    //   const data = await response.json();
    //   setUsers(data.results);
    // }

    // getUsers();
  }, []);

  // console.log(users);

  return (
    <div>
      {/* ✅ users is initially [] and then gets populated after API responds */}
      {users.map(user => (
        <div key={user.id.value}>
          <h2>
            Name: {user.name.first} {user.name.last}
          </h2>
        </div>
      ))}
    </div>
  );
}