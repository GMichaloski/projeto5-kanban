import "./internCard.css";
import Avatar from "../Avatar/Avatar";

const InternCard = (props) => {
  const { img, title, children } = props;

  return (
    <div className="intern-card-container">
      <h3 className="h3">{title}</h3>
      <span className="content">
        <Avatar img={img} className="avatar"></Avatar>
        {children}
      </span>
    </div>
  );
};

export default InternCard;
