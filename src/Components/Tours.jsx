import { useEffect, useState } from 'react'
import '../Styles/ToursStyles.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tours`);
                if (response.status === 200) {
                    setTours(response.data);
                }
            } catch (error) {
                console.log('Error : ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='tours-full-container'>

            <div className='tours-content-area'>
                <div className='tours-list'>
                    {tours.map((item) => (
                        <Link 
                            to={`/api/tours/${item.id}`}
                            key={item.id}
                            className='tour-card-wrapper'
                        >
                            <div className='tour-card'>
                                
                                {/* IMAGE */}
                                <div className='tour-image-section'>
                                    <img 
                                        src={item.image_url} 
                                        alt="Not Found" 
                                        className='tour-image' 
                                    />
                                </div>

                                {/* DETAILS */}
                                <div className='tour-details'>
                                    <div className='tour-id'>{item.id}</div>
                                    <div className='tour-title'>{item.title}</div>
                                    <div className='tour-destination'>Destination : {item.destination}</div>
                                    <div className='tour-price'>₹ {item.price}</div>

                                    <div className='tour-duration'>
                                        <AccessTimeIcon sx={{ fontSize: 14 }} />
                                        {item.duration} days
                                    </div>

                                    <div className='tour-start-date'>
                                        Starts On : {
                                            new Intl.DateTimeFormat('en-IN', {
                                                dateStyle: 'medium',
                                                timeStyle: 'short'
                                            }).format(new Date(item.start_date))
                                        }
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tours;