import './Banner.css';

const Banner = (props) => {
    return (
        <div className='final_result'>
            <span className='text blink_me'>{props.title}</span>
        </div>
    );
};

export default Banner;