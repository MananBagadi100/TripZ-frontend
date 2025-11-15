import { useEffect, useState } from 'react'
import '../Styles/ToursStyles.css'
import axios from 'axios'
const Tours = () => {
    const [tours,setTours] = useState([])
    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/tours')
                console.log(response.data)
            }
            catch (error) {
                console.log('Error',error)
            }
        }
        fetchData()
    },[])
    return (
        <div className='tours-grid-list'>
            {

            }
        </div>
    )
}
export default Tours