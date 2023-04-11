import "./BusinessList.css";
import Business from "../Business/Business";

export interface BusinessType {
  id: number;
  url: string,
  imageSrc?: string,
  name: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  category: string,
  rating: number
  reviewCount: number
}

export type Businesses = {
    businesses: BusinessType[]
}

function BusinessList({ businesses }: Businesses) {
  return (
    <div className="BusinessList">
      {businesses.map((business: BusinessType) => {
        return <Business key={business.id} business={business} />;
      })}
    </div>
  );
}

export default BusinessList;
