import "./internCard.css";
import Avatar from "../Avatar/Avatar";

const InternCard = (props) => {
  const { img, title, children } = props;

  return (
    <div className="intern-card-container">
      <h3>{title}</h3>
      <Avatar img={img}></Avatar>
      {children}
    </div>
  );
};

export default InternCard;
