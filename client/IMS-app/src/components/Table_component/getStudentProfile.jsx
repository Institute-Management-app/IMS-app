import {React, useState, useEffect} from 'react'
import { oneStudent } from '../../services/getService'

function GetStudent() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        oneStudent().then((data) => {
            setDetails(data.data);
        });
    }, []);

    const getRow= (details, index)=>{
        return (
            <tr key={index}>
                <td>{details.name}</td>
                <td>{details.dob}</td>
                <td>{details.phone}</td>
                <td>{details.address}</td>
                <td>{details.Student.branch}</td>
                <td>{details.Student.semester}</td>
            </tr>
        )
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Details</h1>

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

export default GetStudent