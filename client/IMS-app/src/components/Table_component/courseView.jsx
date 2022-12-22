import {React, useState, useEffect} from 'react'
import { courseGetAll} from '../../services/getService'

function GetCourse() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        courseGetAll().then((data) => {
           
            setDetails(data.data);
        });
    }, []);

    const getRow= (details, index)=>{
        return (
            <tr key={index}>
                <td>{details.course_name}</td>
                <td>{details.branch}</td>
                <td>{details.semester}</td>
                <td>{details.fees}</td>
            </tr>
        )
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Courses</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Branch</th>
                        <th>Semester</th>
                        <th>Fees</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {details.map(getRow)}
                </tbody>
            </table>
        </div>
    )
}

export default GetCourse