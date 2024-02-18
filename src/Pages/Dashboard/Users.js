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
        <div className='lg:ml-5 sm:ml-0 lg:w-full md:w-full sm:w-[310px]  mb-3 '>
            <h2 className="text-2xl my-3">All Users: {users?.length}</h2>
            <div  className="">
                <table className="table ">
                    <thead>
                        <tr>
                        
                            <th>Email</th>
                            <th>Admin</th>
                            <th className='sm:hidden lg:block'>Remove</th>
                            
                        </tr>
                    </thead>
                    <tbody className='sm:text-xs lg:text-2xl'>
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