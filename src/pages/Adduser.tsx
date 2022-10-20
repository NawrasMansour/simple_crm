import React from 'react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import UserForm from '../components/UserForm'



function Adduser() {
    return (
        <section className="min-h-screen bg-gray-50">
                <Sidebar />
                <div className="ml-0 transition md:ml-60">
                    <Header />
                    <div className="p-4"> {/* Add content here, remove div below */}
                        <UserForm userID={''} user={''} source={'add'} />
                    </div>
                </div>
            </section>
    )
}

export default Adduser