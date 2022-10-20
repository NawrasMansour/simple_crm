import React from 'react'
import Alert from '../components/Alert'


import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Statistics from '../components/Statistics'
import UsersList from '../components/UsersList'
import { useUsersContext } from '../contexts/users_context'





function Dashboard() {
    const {users} = useUsersContext();
    return (
        <section className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="ml-0 transition md:ml-60">
                <Header />
                <div className="p-4"> {/* Add content here, remove div below */}
                    <Statistics customUserAmount={users.length} />
                    <UsersList users={users} />
                </div>
            </div>
        </section>
    )
}

export default Dashboard