import "./externCard.css";
import InternCard from "../Intern-card/InternCard";

const ExternCard = (props) => {
  const { cardType, children } = props;
  // cardType -> todo, inprogress, review, done

  return <div className={`extern-card-${cardType}`}>{children}</div>;
};

export default ExternCard;
