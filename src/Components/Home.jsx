import '../Styles/HomeStyles.css'
import Tours from './Tours'
const Home = () => {
    return (
        <div className="home-full-container">
            <div className="home-heading-area">Tours</div>
            <div className="home-content-area">
                <Tours />
            </div>
        </div>
    )
}
export default Home