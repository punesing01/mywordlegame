import './Banner.css';

const Banner = (props) => {
    return (
        <div className='final_result'>
            <span className='text'>{props.title}</span>
        </div>
    );
};

export default Banner;