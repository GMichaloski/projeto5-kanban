import './Tag.css'

const Tag =(props)=>{
    const {ContainerCard} = props;


return (
    <div>
          <label className={`tag tag_${ContainerCard}`}> Texto Label</label>  
    </div>

)}



export default Tag