import css from '../styles/Contact.module.css'

export default function Contact() {
    let sectionClasses = `section section__contact`
    return (
        <section className={sectionClasses} id="contact-me">
            <h1 className="section__title title--right">Contact</h1>
            <div className='content'>
                <h2 className='section__subtitle'>Send Me an E-Mail</h2>
                <form className={css.contactForm}>
                    <div className={css.inputContainer}>
                        <input placeholder='Nome e cognome'></input>
                    </div>
                    <div className={css.inputContainer}>
                        <input placeholder='Email'></input>
                    </div>
                    <textarea placeholder='Messaggio..'></textarea>
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}