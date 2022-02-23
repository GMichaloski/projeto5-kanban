import "./externCard.css";

const ExternCard = (props) => {
  const { cardType, title, children } = props;
  // cardType -> todo, inprogress, review, done

  return (
    <div className={`extern-card-${cardType}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default ExternCard;
