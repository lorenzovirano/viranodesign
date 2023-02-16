import css from '../styles/Header.module.css';

export default function Header(){
    return(
        <header className={css.header}>
            <div className="container container--header">
            <div className={css.header__left}>
                <figure height={30}>
                    Logo
                </figure>
                <ul className={css.navbar}>
                    <li className={css.navbar__item}><a href="#">Item 1</a></li>
                    <li className={css.navbar__item}><a href="#">Item 2</a></li>
                    <li className={css.navbar__item}><a href="#">Item 3</a></li>
                    <li className={css.navbar__item}><a href="#">Item 4</a></li>
                </ul>
            </div>
            <div className={css.header__right}>
                <div className={css.download__btn}>
                    <a href="">
                        Download CV
                    </a>
                </div>
            </div>
            </div>
        </header>
    )
}