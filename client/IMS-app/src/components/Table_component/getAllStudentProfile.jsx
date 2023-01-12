import {React, useState, useEffect} from 'react'
import { viewAll } from '../../services/getService'

function Get() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        viewAll().then((data) => {
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
                <td>{details.User.Student.branch}</td>
                <td>{details.User.Student.semester}</td>
            </tr>
        )
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Students</h1>

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

export default Get