import React, { useState } from 'react'

function FetchApi() {

    const url = "https://api.github.com/users"

    const [users, setUsers] = useState([])
    
    const fetchUser = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setUsers(data)
    }
  return (
    <div>
      <h2>Fetch API</h2>
        <button onClick={fetchUser}>Fetch Github Users</button>
        {
          users.map( (user) => {
            return(
              <div key={user.id}>
                  <span >
                  <h4>{user.login}</h4>
                  <img src={user.avatar_url} alt="avatar" width="100px"></img>
                  </span>
              </div>
            )
          }
        )
        }
        
    </div>
  )
}

export default FetchApi