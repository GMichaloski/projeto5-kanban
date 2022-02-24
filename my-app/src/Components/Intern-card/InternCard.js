import "./internCard.css";
import Avatar from "../Avatar/Avatar";

const InternCard = (props) => {
  const { img, title, children } = props;

  return (
    <div className='intern-card'>
      <div className='intern-card-title' >
          <h3 >{title}</h3>
      </div>
      
      <div className='intern-card-status'>
          <Avatar img={img}></Avatar>
          {children}
      </div>
      
    </div>
  );
};

export default InternCard;
