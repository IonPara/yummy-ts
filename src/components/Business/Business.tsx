import { BusinessType } from "../BusinessList/BusinessList";
import "./Business.css";



function Business({business}: {business: BusinessType}) {
    return (
      <a href={business.url} rel="noreferrer" target="_blank">
        <div className="Business">
          <div className="image-container">
            <img src={business.imageSrc} alt="" />
          </div>
          <h2>{business.name}</h2>
          <div className="Business-information">
            <div className="Business-address">
              <p>{business.address}</p>
              <p>{business.city}</p>
              <p>{business.state + business.zipCode}</p>
            </div>
            <div className="Business-reviews">
              <h3>{business.category}</h3>
              <h3 className="rating">{business.rating} stars</h3>
              <p>{business.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </a>
    );
}

export default Business;
