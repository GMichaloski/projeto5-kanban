import "./internCard.css";
import internCard from "../Intern-card/internCard";

const externCard = (props) => {
  const { cardType, img, tag, title } = props;
  // cardType -> todo, inprogress, review, done
  switch (cardType) {
    case "todo":
    case "inprogress":
    default:
      return <div className="two-extern-card"></div>;
    case "review":
    case "done":
      return <div className="three-extern-card"></div>;
  }

  return (
    <div className="intern-card-container">
      <h2>${title}</h2>
      <Avatar img={img}></Avatar>
      <Tag ContainerCard={tag}></Tag>
    </div>
  );
};

export default internCard;
