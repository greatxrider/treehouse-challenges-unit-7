import StarRating from "./StarRating";

const Course = ({ name, desc, url }) => {
    return (
        <div className="card">
            <div>
                <img src={url} alt={name} />
            </div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <h3>Course Rating</h3>
            <StarRating />
        </div>
    );
}

export default Course;