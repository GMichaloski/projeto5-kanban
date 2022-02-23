import "./Tag.css";

const Tag = (props) => {
  const { ContainerCard, txt } = props;

  return (
    <div>
      <label className={`tag tag_${ContainerCard}`}>{txt}</label>
    </div>
  );
};

export default Tag;
