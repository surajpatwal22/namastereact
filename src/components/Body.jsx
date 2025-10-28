import RestroCard from "./RestroCard";
import SearchSection from "./SearchSection";
import restaurants from "../utils/mockData";

const Body = () => {
    

    return (
        <div className="body">
            <SearchSection />
            <div className="restro-container">
                {restaurants.map((restro, index) => (
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