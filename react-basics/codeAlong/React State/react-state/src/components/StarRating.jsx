import { useState } from 'react';
import Star from './Star';

const StarRating = () => {
    const [courseRating, setCourseRating] = useState(0);

    const renderStars = (count) => {
        return Array.from({ length: count }, (_, index) => (
            <Star
                key={index}
                selected={index < courseRating}
                setRating={() => handleSetRating(index + 1)}
            />
        ));
    }

    const handleSetRating = (rating) => {
        if (courseRating === rating) {
            setCourseRating(0);
        } else {
            setCourseRating(rating);
        }
    };

    return (
        <ul className='course--stars'>
            {renderStars(5)}
        </ul>
    );
}

export default StarRating;