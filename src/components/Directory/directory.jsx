import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../service/api';  // Adjust the import path as necessary

const Directory = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');  // Assume token is stored in localStorage
        const getUsers = async () => {
            try {
                const response = await fetchUsers(token);
                setUsers(response.data);
            } catch (error) {
                setError(error.response ? error.response.data : 'Error fetching users');
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">User Directory</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Username</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">First Name</th>
                        <th className="py-2">Last Name</th>
                        <th className="py-2">Staff</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="py-2 px-4">{user.id}</td>
                            <td className="py-2 px-4">{user.username}</td>
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4">{user.first_name}</td>
                            <td className="py-2 px-4">{user.last_name}</td>
                            <td className="py-2 px-4">{user.is_staff ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Directory;
