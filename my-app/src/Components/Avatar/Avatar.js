import "./Avatar.css";
import img1 from "./images/Female.png";
import img2 from "./images/male.png";

const Avatar =(props)=>{
    const {desc,descAlt='imagem do avatar'}=props;
    
    return (
        //<img src={img1} alt ={`${descAlt}`}/>
        <img src={img1} alt ={`${descAlt}`}/> // como escalar para conseguir pegar um src genérico ???
        
        
    )


};

export default Avatar;