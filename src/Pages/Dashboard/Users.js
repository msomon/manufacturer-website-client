import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://electronics-manufecture-website.onrender.com/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='ml-3'>
            <h2 className="text-2xl my-3">All Users: {users?.length}</h2>
            <div className="">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user,index)=><UserRow
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;