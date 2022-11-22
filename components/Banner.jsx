import css from '../styles/Banner.module.css';

export default function Banner(){
    return (
        <div className={css.banner}>
            <p className={css.roles}>Web Designer Web Developer Frontend Developer Ux/Ui Designer</p>
            <div className={css.banner__titles}>
                <h1 className={css.banner__title}>Lorenzo <br></br>Virano</h1>
            </div>
            <p className={css.roles}>Web Designer Web Developer Frontend Developer Ux/Ui Designer</p>
        </div>
    )
}