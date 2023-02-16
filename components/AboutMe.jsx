import css from '../styles/AboutMe.module.css'

export default function AboutMe() {
    let sectionClasses = `section section__about-me`
    return (
        <section className={sectionClasses}>
            <h1 className="section__title">About Me</h1>
            <div className='text-container'>
                <p>
                {`Ciao, sono Lorenzo Virano, uno sviluppatore frontend junior di 20 anni. Sono competente nella creazione e gestione di database, nonché nello sviluppo frontend e backend. Al momento sto frequentando il secondo anno di università di informatica presso l'Università Parthenope di Napoli. Sono appassionato di tecnologia e mi piace esplorare nuove tecnologie e acquisire nuove competenze. Nonostante la mia posizione di junior, sono entusiasta e proattivo nel mio lavoro, e sono sempre alla ricerca di nuove opportunità per imparare e crescere professionalmente. Sono una persona creativa e mi piace contribuire con idee innovative.`}
                </p>
            </div>
        </section>
    )
}