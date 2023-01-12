import {React, useState, useEffect} from 'react'
import { adminMark } from '../../services/getService'

function MarkAdmin() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        adminMark().then((data) => {
           
            setDetails(data.data);
        });
    }, []);

    const getRow= (details, index)=>{
        return (
            <tr key={index}>
                <td>{details.User.name}</td>
                <td>{details.User.Student.branch}</td>
                <td><tr>{details.User.Marks.map(getid)}</tr></td>
                <td><tr>{details.User.Marks.map(getcname)}</tr></td>
                <td><tr>{details.User.Marks.map(getmark)}</tr></td>
            </tr>
        )
    }
const getid = (details, index)=> {
    return (    
        <tr>{details.Course.course_id}</tr>
    )
}
const getcname = (details, index)=> {
    return (
        <tr>{details.Course.course_name}</tr>
    )
}
const getmark = (details, index)=> {
    return (
        <tr>{details.mark}</tr>
    )
}
    return (
        <div className='container'>
            <h1 className='text-center'>Marks</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>

                        <th>Student Name</th>
                        <th>Branch</th>
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

export default MarkAdmin;