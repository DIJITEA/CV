import '../../scss/homePage.scss'
import Petals from '../Petasl'
function Homepage() {
    return (<main className="home-page">
        <div className="home-page__container">
            <div className="home-page__content-container">
                <h1 className="home-page__h1">FRONT-END ENGINEER</h1>
                <div className="home-page__name-container">
                    <h2 className="home-page__h2">KORNYAKOV</h2>
                    <h2 className="home-page__h2">OLEG</h2>
                    <p className="home-page__p">bsi transliteration</p>
                </div>
            </div>
        </div>
    <Petals/>
    </main>)
}
export default Homepage