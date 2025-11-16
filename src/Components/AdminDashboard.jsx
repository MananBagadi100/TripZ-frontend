import axios from 'axios'
import '../Styles/AdminDashboardStyles.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
    const [allTours, setAllTours] = useState([])
    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tours`)
                console.log('response',response)
                if(response.status === 200) {
                    setAllTours(response.data)
                }
            }
            catch (error) {
                console.log('Error : ',error)
            }
        }
        fetchData()
    },[])
    console.log('the tours is ',allTours)
    return (
        <div className="admin-dashboard-full-container">
            <div className="admin-dashboard-heading">Admin Dashboard</div>
            <div className="admin-dashboard-content-area">
                <div className="admin-dashboard-tours-list">
                    {
                        allTours.map((item) => (
                            <Link to={`/api/tours/${item.id}`} key={item.id} className='admin-dashboard-tour-card-wrapper'>
                                <div className="admin-dashboard-tour-card">
                                    <div className="admin-dashboard-image-section">
                                        <img src={item.image_url} alt="Image Not Found" className='admin-dashboard-tour-image'/>
                                    </div>
                                    <div className="admin-dashboard-tour-details">
                                        <div className="dashboard-tour-id">{item.id}</div>
                                        <div className="dashboard-tour-title">{item.title}</div>
                                        <div className="dashboard-tour-destination">Destination : {item.destination}</div>
                                        <div className="dashboard-tour-price">₹ {item.price}</div>
                                        <div className="dashboard-tour-duration"><AccessTimeIcon sx={{fontSize:14}}/>{item.duration} days</div>
                                        <div className="dashboard-tour-start-date">Starts On :  
                                            {new Intl.DateTimeFormat('en-IN', {
                                                dateStyle: 'medium',
                                                timeStyle: 'short'
                                            }).format(new Date(item.start_date))}
                                        </div>
                                        <div className="dashboard-tour-btn">
                                            <button className="dasboard-tour-edit-btn">Edit ✏️</button>
                                            <button className="dashboard-tour-delete-btn">Delete 🗑️</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard