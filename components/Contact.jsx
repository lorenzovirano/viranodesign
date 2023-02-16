import css from '../styles/Contact.module.css'

export default function Contact() {
    let sectionClasses = `section section__contact`
    return (
        <section className={sectionClasses} id="contact-me">
            <h1 className="section__title title--right">Contact</h1>
            <div className='content'>
            </div>
        </section>
    )
}