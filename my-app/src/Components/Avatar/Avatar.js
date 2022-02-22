import "./Avatar.css";

const Avatar = (props) => {
  const { img, descAlt = "imagem do avatar" } = props;

  return (
    <img src={img} alt={`${descAlt}`} /> // como escalar para conseguir pegar um src genérico ???
  );
};

export default Avatar;
