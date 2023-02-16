import css from '../styles/Footer.module.css';

export default function Footer(){
    return(
        <footer className={css.footer}>
            <div className={css.footer__up}></div>
            <div className={css.footer__down}>
                <p className={css.copyright}>Copyright © lorenzovirano.com</p>
            </div>
        </footer>
    )
}