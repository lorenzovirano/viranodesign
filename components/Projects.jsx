import css from '../styles/AboutMe.module.css'

export default function AboutMe() {
    let sectionClasses = `section section__projects`
    return (
        <section className={sectionClasses}>
            <h1 className="section__title">Projects</h1>
            <div className='content'>
                <p>
                {`Sono Lorenzo Virano, uno sviluppatore frontend junior di 20 anni. La mia passione per l'informatica mi ha spinto a esplorare nuove tecnologie e acquisire competenze nel campo della programmazione, compresi lo sviluppo frontend e backend, nonché la creazione e gestione di database. Al momento frequento il secondo anno di università di informatica presso l'Università Parthenope di Napoli. Nonostante la mia posizione di junior, sono entusiasta e proattivo nel mio lavoro e sono sempre alla ricerca di nuove opportunità per imparare e crescere professionalmente. Sono una persona creativa e mi piace contribuire con idee innovative. Sono convinto che la mia passione e le mie competenze sarebbero un valore aggiunto per qualsiasi progetto, e sono pronto ad affrontare sfide e a lavorare sodo per raggiungere gli obiettivi prefissati.`}
                </p>
            </div>
        </section>
    )
}