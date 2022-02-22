import "./internCard.css";
import Avatar from "../Avatar/Avatar";
import Tag from "../Tag/Tag";

const InternCard = (props) => {
  const { img, tag, tagtxt, title, children } = props;

  return (
    <div className="intern-card-container">
      <h2>{title}</h2>
      <Avatar img={img}></Avatar>
      {children}
    </div>
  );
};

export default InternCard;
