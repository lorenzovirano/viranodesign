import css from '../styles/Skills.module.css';
import ProgressBar from './widget/ProgressBar';

export default function Skills() {
    let sectionClasses = `section section__skills`
    return (
        <section className={sectionClasses} id="skills">
            <h1 className="section__title title--right">Skills</h1>
            <div className='content'>
                <ProgressBar label="CSS" value={95} />
                <ProgressBar label="JS" value={90} />
                <ProgressBar label="HTML" value={100} />
                <ProgressBar label="PHP" value={75} />
                <ProgressBar label="CSS" value={90} />
                <ProgressBar label="ReactJS" value={80} />
                <ProgressBar label="NodeJS" value={70} />
            </div>
        </section>
    )
}