import React, { useEffect, useState } from 'react'
import './style.css'
export default function Users(props) {
    const url = 'https://api.github.com/users'
    const [users, setUsers] = useState([])

    const getData = async () => {
        const res = await fetch(url)
        const users = await res.json()
        setUsers(users)
    }
    useEffect(() => {
        getData()

    }, [])

    return (
        <div className="container" >
            <h2>Github Users</h2>
            <div className="grid">
                {
                    users?.map((user, index) => {
                        return (
                            <div key={user.id} className="card">
                                <a href={user.html_url}>
                                    <img alt={user.login} src={user.avatar_url}></img>
                                    <p>{user.login}</p>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
