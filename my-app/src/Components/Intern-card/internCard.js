import "./internCard.css";
import Avatar from "../Avatar/Avatar";
import Tag from "../Tag/Tag";

const internCard = (props) => {
  const { img, tag, title } = props;

  return (
    <div className="intern-card-container">
      <h2>${title}</h2>
      <Avatar img={img}></Avatar>
      <Tag ContainerCard={tag}></Tag>
    </div>
  );
};

export default internCard;
