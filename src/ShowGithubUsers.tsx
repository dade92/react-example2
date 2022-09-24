import React, { useEffect, useState } from "react";


interface GithubUser {
    id: number;
    login: string;
}

export const ShowGithubUsers = () => {
    const [users, setUsers] = useState<GithubUser[]>([]);

    useEffect(() => {
        retrieveUsers('https://api.github.com/users').then(
            users => setUsers(users)
        ).then(
            users => console.log(users)
        );
    }, [])

    return (
        <>
            <h3>github users</h3>
            {
                users.length == 0 
                    ? <p>Loading...</p>
                    : users.map((user) => {
                        return (
                            <div>
                                <p>{user.id}</p>
                                <p>{user.login}</p>
                            </div>

                        );
                    })
            }

        </>
    )
}


const retrieveUsers = (url: string): Promise<GithubUser[]> => {
    return fetch(url)
        .then(res => res.json())
        .then(res => res.map((user: any) => formatUser(user)));
};

const formatUser = (user: any): GithubUser => {
    return {id: user.id, login: user.login}
}