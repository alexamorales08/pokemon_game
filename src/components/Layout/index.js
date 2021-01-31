import s from './style.module.css';


const Layout = ({ id, title, descr, urlBg, colorBg } ) => {
    const sectionStyle = {};

    if (urlBg){
        sectionStyle.backgroundImage = `url(${urlBg}`;
    }
    if (colorBg){
        sectionStyle.backgroundImage = colorBg ;
    }

    return (
      <>
<section 
className={s.root}
id={id}
style = {sectionStyle}

>


    <div className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.separator}></span>
            </div>
            <div className={`${s.desc} + ${s.full}`}>
                <p>{descr}</p>
            </div>
        </article>
    </div>
</section>
</>
  )
}

export default Layout;