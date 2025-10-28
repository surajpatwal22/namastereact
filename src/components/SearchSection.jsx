import {BACKGROUND_IMAGE} from "../utils/contant";

const SearchSection = () => {
    return (
        <div
            className="search-section"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px',
                backgroundImage: `url(${BACKGROUND_IMAGE})`,
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

export default SearchSection;