import './index.css'
import partyHalls from '../../assets/partyhalls-icon.PNG';
import saloonIcon from '../../assets/saloon-icon.PNG';
import cateringIcon from '../../assets/catering-icon.PNG';
import designerIcon from '../../assets/designer-icon.PNG';
import search from '../../assets/search.PNG';
import request from '../../assets/request.PNG';
import book from '../../assets/book.PNG';
import watchVideo from '../../assets/watch-video.PNG';


export default function Services() {
    return(
        <div>
            <p className="service-heading">Our Best Services For You</p>
            <div id="img-container-1">
                <img src={partyHalls} id="partyhall-icon"/>
                <img src={saloonIcon} id="saloon-icon"/>
                <img src={cateringIcon} id="catering-icon"/>
                <img src={designerIcon} id="designer-icon"/>
            </div>
            <br />
            <div>
            <div id="party-text">
                <p>PARTY HALLS <br/> 35 Events | 15 Service Providers</p>
            </div>
            <div id="saloon-text">
                <p>SALOONS <br/> 35 Events | 15 Service Providers</p>
            </div>
            <div id="catering-text">
                <p>CATERING SERVICES <br/> 35 Events | 15 Service Providers</p>
            </div>
            <div id="designer-text">
                <p>DRESS DESIGNER <br/> 35 Events | 15 Service Providers</p>
            </div>
            </div>
            <div id="book-service">
                <br/>
                <p className="service-heading" id="book-text">How Book Services?</p>
                <div id="img-main-div">
                    <div id="search-icon">
                        <img src={search} className="all-img"/>
                        <p><span className="head">Search Services</span> <br/> Search, review, short list and <br/> share the Best Banquet Halls, <br/> Party Halls near you.</p>
                    </div>
                    <div id="request-icon">
                        <img src={request} className="all-img"/>
                        <p><span className="head">Request Quote</span> <br/> Get multiple competing free <br/> quotes from Banquet Hall and <br/> Party Halls owners.</p>
                    </div>
                    <div id="book-icon">
                        <img src={book} className="all-img"/>
                        <p><span className="head">Book a Service</span> <br/> Select a quote that best fits your <br/> needs and book or reserve a<br/> Banquet Hall of your choice.</p>
                    </div>
                    <div id="watch-video">
                    <p><span className="head">Watch Video</span></p>
                    <img src={watchVideo}/>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        </div>
    )
}