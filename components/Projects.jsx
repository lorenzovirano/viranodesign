import css from '../styles/Projects.module.css'

export default function Projects() {
    let sectionClasses = `section section__projects`
    return (
        <section className={sectionClasses} id="projects">
            <h1 className="section__title">Projects</h1>
            <div className='content'>
            </div>
        </section>
    )
}