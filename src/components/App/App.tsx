import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import Yelp from "../../util/Yelp";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { BusinessType } from "../BusinessList/BusinessList";
import { array } from "../../data/businessArray";

function App() {
  const [businesses, setBusinesses] = useState<BusinessType[]>(array);

  function searchYelp(term: string, location: string, sortBy: string): void {
    Yelp.search(term, location, sortBy).then((businesses) => {
      if (businesses) setBusinesses(businesses);
    });
  }

  useEffect(() => {
    searchYelp("", "london", "best_match");
  }, []);
  return (
    <div className="App">
      <h1>yummy</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
