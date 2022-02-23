import "./externCard.css";
import InternCard from "../Intern-card/InternCard";

const ExternCard = (props) => {
  const { cardType, title, children } = props;
  // cardType -> todo, inprogress, review, done

  return (
    <div className={`extern-card-${cardType}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default ExternCard;
