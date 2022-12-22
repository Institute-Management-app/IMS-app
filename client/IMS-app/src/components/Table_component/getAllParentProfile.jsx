import {React, useState, useEffect} from 'react'
import { getAll} from '../../services/getService'

function GetParent() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        getAll().then((data) => {
            setDetails(data.data);
        });
    }, []);

    const getRow= (details, index)=>{
        return (
            <tr key={index}>
                <td>{details.User.name}</td>
                <td>{details.User.dob}</td>
                <td>{details.User.phone}</td>
                <td>{details.User.address}</td>
                <td>{details.User.Parent.occupation}</td>
                <td>{details.User.Parent.relationship}</td>
            </tr>
        )
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Parents</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Branch</th>
                        <th>Semester</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map(getRow)}
                </tbody>
            </table>
        </div>
    )
}

export default GetParent