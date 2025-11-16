import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "../Styles/TourDetailsStyles.css";

const TourDetails = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/tours/${id}`
                );
                if (res.status === 200) setTour(res.data);
            } catch (err) {
                console.log("Error loading tour:", err);
            }
        };
        fetchTour();
    }, [id]);

    if (!tour) return <div>Loading...</div>;

    return (
        <div className="tour-details-full-container">
            <div className="tour-details-content-area">

                <img
                    src={tour.image_url}
                    alt="Tour Image"
                    className="tour-details-hero-image"
                />

                <div className="tour-details-info">
                    <div className="tour-details-title">{tour.title}</div>

                    <div className="tour-details-destination">
                        Destination: {tour.destination}
                    </div>

                    <div className="tour-details-price">₹ {tour.price}</div>

                    <div className="tour-details-duration">
                        <AccessTimeIcon sx={{ fontSize: 20 }} />
                        {tour.duration} days
                    </div>

                    <div className="tour-details-start-date">
                        Starts On:{" "}
                        {new Intl.DateTimeFormat("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                        }).format(new Date(tour.start_date))}
                    </div>

                    <div className="tour-details-dummy-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, explicabo.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;