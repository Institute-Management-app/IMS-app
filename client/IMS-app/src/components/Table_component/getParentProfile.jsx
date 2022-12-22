import {React, useState, useEffect} from 'react'
import { oneParent } from '../../services/getService'

function GetParent() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        oneParent().then((data) => {
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
                <td>{details.Parent.occupation}</td>
                <td>{details.Parent.relationship}</td>
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
                        <th>Occupation</th>
                        <th>Relationship</th>
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