import Tag from "../Tag/Tag";
import "./Text.css"

const Text =(props)=>{
    const {textContent} =props;


    return (
        <p> {`${textContent}`} </p>
    )


};

export default Text;