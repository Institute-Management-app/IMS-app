import {React, useState, useEffect} from 'react'
import { feedback} from '../../services/getService'

function GetFeedback() {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        feedback().then((data) => {
           
            setDetails(data.data);
        });
    }, []);

    const getRow= (details, index)=>{
        return (
            <tr key={index}>
                <td>{details.user_id}</td>                
                <td>{details.User.name}</td>                 
                <td>{details.content}</td>
            </tr>
        )
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Feedbacks</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Feedback</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {details.map(getRow)}
                </tbody>
            </table>
        </div>
    )
}

export default GetFeedback