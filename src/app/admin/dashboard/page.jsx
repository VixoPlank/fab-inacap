'use client'

import { signOut} from 'next-auth/react'

function DashboardPage() {

   

  return (

    
    <div>
      <h1>Admin</h1>

      <button onClick={() => {signOut();}}>Logout</button>


    </div>
   
   
  )
}

export default DashboardPage