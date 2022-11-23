import css from '../styles/AboutMe.module.css'

export default function AboutMe() {
    let sectionClasses = `section section__about-me`
    return (
        <section className={sectionClasses}>
            <h1 className={css.section__title}>About Me</h1>
        </section>
    )
}