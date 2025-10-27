import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading =React.createElement("div",{id:parent},
//     [React.createElement("div",{id:"child" , key: "child" },
//         [
//             React.createElement("h1", { key: "h1a" }, "h1 heading"),
//             React.createElement("h2", { key: "h2a" }, "h2 heading"),
//           ]
//     ),React.createElement("div",{id:"child2" , key: "child2" },
//         [
//             React.createElement("h1", { key: "h1b" }, "h1 heading"),
//             React.createElement("h2", { key: "h2b" }, "h2 heading"),
//           ]
//     )]
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);

//reacxt element 
// const headingusingjsx = (
//     <div id="parent" className="parent">
//         <div id="child" className="child">
//             <h1 key="h1a">h1 heading using jsx</h1>
//             <h2 key="h2a">h2 heading using jsx</h2>
//         </div>
//         <div id="child2" className="child2">
//             <h1 key="h1b">h1 heading using jsx</h1>
//             <h2 key="h2b">h2 heading using jsx</h2>
//         </div>
//     </div>
// )
// const coount = 0;

// const Title = () => (
//     <div>
//         <h1>Title</h1>
//     </div>
// )

//functional component => return some peice of jsx
// const HeaderComponent = () => {
//     return (
//         <div>
//             <Title />
//             {Title()}
//             <h1>{coount}Header</h1>
//         </div>
//     )
// }


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/9c90f77b-bd82-5482-9f7f-170817458f3b/e0768043-f16d-5667-a3cd-c51a212d68ac.jpg" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}

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

const backgroundImage = "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const SearchSection = () => {
    return (
        <div
            className="search-section"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: 'fadeIn 3s ease-in-out',
            }}
        >
            <div className="container">
                <input
                    type="text"
                    name="search"
                    placeholder="Search restaurants..."
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginRight: '10px',
                    }}
                />
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        color: '#fff',
                        backgroundColor: '#007bff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

const Body = () => {
    const restaurants = [
        {
            name: "The Food Lounge",
            cuisine: "Italian, Chinese",
            rating: 4.5,
            deliveryTime: 30,
            image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f4f1fd09-0a0b-5fe9-9e3b-d2754cd34825/47493f84-f6c3-58e4-b19c-747909e7994e.jpg",
        },
        {
            name: "The Food Lounge",
            cuisine: "Italian, Chinese",
            rating: 4.5,
            deliveryTime: 30,
            image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f4f1fd09-0a0b-5fe9-9e3b-d2754cd34825/47493f84-f6c3-58e4-b19c-747909e7994e.jpg",
        },
        {
            name: "Spice villa",
            cuisine: "Indian, Continental",
            rating: 4.2,
            deliveryTime: 25,
            image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f4f1fd09-0a0b-5fe9-9e3b-d2754cd34825/47493f84-f6c3-58e4-b19c-747909e7994e.jpg",
        },
        {
            name: "Pizza Hut",
            cuisine: "Italian, Fast Food",
            rating: 4.1,
            deliveryTime: 20,
            image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f4f1fd09-0a0b-5fe9-9e3b-d2754cd34825/47493f84-f6c3-58e4-b19c-747909e7994e.jpg",
        },
        {
            name: "Burger King",
            cuisine: "Fast Food, American",
            rating: 4.4,
            deliveryTime: 35,
            image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f4f1fd09-0a0b-5fe9-9e3b-d2754cd34825/47493f84-f6c3-58e4-b19c-747909e7994e.jpg",
        },
        {
            name: "The Cake Shop",
            cuisine: "Desserts",
            rating: 4.6,
            deliveryTime: 40,
            image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f4f1fd09-0a0b-5fe9-9e3b-d2754cd34825/47493f84-f6c3-58e4-b19c-747909e7994e.jpg",
        },
        {
            name: "The Coffee Shop",
            cuisine: "Coffee, Beverages",
            rating: 4.3,
            deliveryTime: 45,
            image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f4f1fd09-0a0b-5fe9-9e3b-d2754cd34825/47493f84-f6c3-58e4-b19c-747909e7994e.jpg",
        },
        {
            name: "The Ice Cream Parlour",
            cuisine: "Desserts",
            rating: 4.7,
            deliveryTime: 50,
            image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f4f1fd09-0a0b-5fe9-9e3b-d2754cd34825/47493f84-f6c3-58e4-b19c-747909e7994e.jpg",
        },
    ];

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
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* --- Section 1: Logo --- */}
                <div className="footer-section">
                    <h2 className="footer-logo">Suraj</h2>
                    <p className="footer-tagline">
                        Building digital experiences that inspire and empower.
                    </p>
                </div>

                {/* --- Section 2: Navigation Links --- */}
                <div className="footer-section">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* --- Section 3: Contact Info --- */}
                <div className="footer-section">
                    <h3 className="footer-title">Contact</h3>
                    <p>123 Web Street, Innovation City, India</p>
                    <p>📞 +91 98765 43210</p>
                    <p>📧 suraj@example.com</p>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Suraj. All rights reserved.
            </div>
        </footer>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <Body />
                <Footer />
            </div>

        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingusingjsx);
root.render(<AppLayout />);