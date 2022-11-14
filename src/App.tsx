import { useEffect, useState } from 'react'
import { UsersService } from './services/users.service'
import { IUsers } from './interfaces/users.interfaces'

function App() {
  const [users, setUsers] = useState<IUsers[]>([])
  useEffect(() => {
    UsersService().then(user => setUsers(user))
  }, [])
  return (
    <div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App
