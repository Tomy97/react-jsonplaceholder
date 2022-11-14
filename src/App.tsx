import { useEffect, useState } from 'react'
import { UsersService } from './services/users.service'
import { IUsers } from './interfaces/users.interfaces'
import { UserActions } from './redux/actions/UserActions'

function App() {
  const { users } = UserActions();
  console.log(users);
  return (
    <div>
      <h4>
        Hola mundo
      </h4>
    </div>
  )
}

export default App
