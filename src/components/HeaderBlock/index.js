import s from './style.module.css';

 const HeaderBlock = (props)=>{
     return (
         <div>
             <div>
                <h1 className ={s.header}>
                    {props.title}
                    
                    </h1>
                
                <p>Simple triple Triad Game</p>
             </div>
         </div>
     )
};
export default HeaderBlock;