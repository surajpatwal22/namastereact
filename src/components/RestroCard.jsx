const RestroCard = ({ name, cuisine, rating, deliveryTime, image }) => {
    return (
        <div className="restro-card">
            <img src={image} alt={`${name} logo`} />
            <div className="restro-card-content">
                <h3>{name}</h3>
                <p>Cuisine: {cuisine}</p>
                <p>Rating: ⭐ {rating}</p>
                <p>Delivery Time: {deliveryTime} mins</p>
            </div>
        </div>
    );
};

export default RestroCard;