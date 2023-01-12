import {React, useState, useEffect} from 'react'
import { getMarks} from '../../services/getService'

function GetMark() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        getMarks().then((data) => {
           
            setDetails(data.data);
        });
    }, []);

    const getRow= (details, index)=>{
        return (
            <tr key={index}>
                <td>{details.course_id}</td>
                <td>{details.Course.course_name}</td>
                <td>{details.mark}</td>
            </tr>
        )
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Marks</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Mark</th>
                       
                        
                    </tr>
                </thead>
                <tbody>
                    {details.map(getRow)}
                </tbody>
            </table>
        </div>
    )
}

export default GetMark