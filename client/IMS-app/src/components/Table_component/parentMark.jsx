import {React, useState, useEffect} from 'react'
import { viewMark } from '../../services/getService'

function MarkView() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        viewMark().then((data) => {
           
            setDetails(data.data);
        });
    }, []);

    const getRow= (details, index)=>{
        return (
            <tr key={index}>
                <td>{details.name}</td>
                <td><tr>{details.Marks.map(getid)}</tr></td>
                <td><tr>{details.Marks.map(getcname)}</tr></td>
                <td><tr>{details.Marks.map(getmark)}</tr></td>
            </tr>
        )
    }
const getid = (details, index)=> {
    return (
        <tr>{details.course_id}</tr>
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

export default MarkView