import RestroCard from "./RestroCard";
import SearchSection from "./SearchSection";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurant , setrestaurant] = useState(restaurants);
    return (
        <div className="body">
            <SearchSection />
            <div className="restro-header">
                    <h2>Restaurant List</h2>
                    <div className="btn-handle">
                    <button className="top-rated-btn" onClick={()=>{
                        const filterrestro = restaurants.filter((restro) => restro.rating > 4.5);
                        // console.log(filterrestro);
                        setrestaurant(filterrestro);
                    }}>Top Rated Restaurants</button>
                     <button className="top-rated-btn" onClick={()=>{
                        setrestaurant(restaurants);
                    }}>All Restaurants</button>

                    </div>
                </div>
            <div className="restro-container">
                {restaurant.map((restro, index) => (
                    <RestroCard
                        key={index}
                        name={restro.name}
                        cuisine={restro.cuisine}
                        rating={restro.rating}
                        deliveryTime={restro.deliveryTime}
                        image={restro.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;