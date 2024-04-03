import PropTypes from 'prop-types';

function Card({ title, price, vote, image }) {
    console.log(image);
    return (
        <div>
            <div className='w-24 h-24 bg-slate-500 text-white'>
                <img src={image} className="w-24 h-24" alt={title} />
                <p>{title}</p>
                <p>{price}</p>
                <p>{vote}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    vote: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};

export default Card;
