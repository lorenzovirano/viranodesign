import css from '../styles/Header.module.css';
import Image from 'next/image';

export default function Header(){
    return(
        <header className={css.header}>
            <div className="container container--header">
            <div className={css.header__left}>
                <ul className={css.navbar}>
                    <Image src={'/images/lorenzovirano.png'} alt="Lorenzo Virano" width={60} height={30}/>
                    <li className={css.navbar__item}><a href="#about-me">About Me</a></li>
                    <li className={css.navbar__item}><a href="#skills">Skills</a></li>
                    <li className={css.navbar__item}><a href="#projects">Project</a></li>
                    <li className={css.navbar__item}><a href="#contact-me">Contact Me</a></li>
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