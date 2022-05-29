import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch ,index }) => {
    const { email,role} = user;
    // console.log(user);

    const makeAdmin = () => {
        fetch(`https://sleepy-brook-79910.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
          .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr>
            <th>{index +1 }</th>
           
            <td>{email}</td>
            
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs btn-secondary">Make Admin</button> :
            <button className="btn btn-xs btn-accent">Already Admin</button>
            }</td>
            <td><button className="btn btn-xs btn-primary">Remove User</button></td>
        </tr>
    );
};

export default UserRow;