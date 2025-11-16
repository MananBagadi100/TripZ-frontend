import axios from 'axios'
import '../Styles/AdminDashboardStyles.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const AdminDashboard = () => {
    const [allTours, setAllTours] = useState([])
    const [openEditDialog, setOpenEditDialog] = useState(false);    //state for dialog box status , open or close
    const [selectedTour, setSelectedTour] = useState(null);
    const { register, handleSubmit, reset } = useForm();    //to send data easily in json format
    const handleEdit = (tour) => {  //for handling edit 
    setSelectedTour(tour);
    reset({
        title: tour.title,
        destination: tour.destination,
        price: tour.price,
        duration: tour.duration,
        start_date: tour.start_date.split("T")[0], // input type="date" needs YYYY-MM-DD
        image_url: tour.image_url
    });
    setOpenEditDialog(true);
    };
    const onUpdate = async (data) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_BACKEND_URL}/api/tours/${selectedTour.id}`,
            data,
            { withCredentials: true }
        );
        if (response.status === 200) {
            alert("Tour updated successfully!");
            // update UI immediately
            setAllTours((prev) =>
                prev.map((t) => (t.id === selectedTour.id ? { ...t, ...data } : t))
            );

            setOpenEditDialog(false);
        }
    } 
    catch (err) {
        console.log("Error updating tour:", err);
        alert("Update failed");
        }
    };
    const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tour?");
    if (!confirmDelete) return; //checking to prevent accident deletes my user

    try {
        const res = await axios.delete(
            `${import.meta.env.VITE_BACKEND_URL}/api/tours/${id}`,
            { withCredentials: true }
        );
        if (res.status === 200) {
            alert("Tour deleted successfully!");
            // remove deleted tour from UI instantly
            setAllTours(prev => prev.filter(t => t.id !== id));
        }
    } 
    catch (err) {
        console.log("Delete error:", err);
        alert("Failed to delete tour");
    }
    };
    
    
    
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
                                            <button className="dasboard-tour-edit-btn"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                handleEdit(item)
                                            }}
                                            >Edit ✏️
                                            </button>
                                            <button className="dashboard-tour-delete-btn"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                handleDelete(item.id)
                                            }}
                                            >Delete 🗑️</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            {openEditDialog && (
                <div className="edit-dialog-overlay">
                    <div className="edit-dialog-box">

                        <h3>Edit Tour</h3>

                        <form onSubmit={handleSubmit(onUpdate)} className="edit-form">

                            <label>Title</label>
                            <input {...register("title")} />

                            <label>Destination</label>
                            <input {...register("destination")} />

                            <label>Price</label>
                            <input type="number" {...register("price")} />

                            <label>Duration (days)</label>
                            <input type="number" {...register("duration")} />

                            <label>Start Date</label>
                            <input type="date" {...register("start_date")} />

                            <label>Image URL</label>
                            <input {...register("image_url")} />

                            <div className="dialog-btn-row">
                                <button type="submit" className="update-btn">Update</button>
                                <button
                                    type="button"
                                    onClick={() => setOpenEditDialog(false)}
                                    className="cancel-btn"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
        
    )
}
export default AdminDashboard