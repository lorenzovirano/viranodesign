import css from '../../styles/Progressbar.module.css';

export default function ProgressBar({label, value}){
    return(
        <div className={css.progressBar__container}>
            <span className={css.progressBar__label}>
                {label}
            </span>
            <div className={css.progressBar}>
                <div className={css.progressBar__value} style={{width: value+'%'}}></div>
            </div>
        </div>
    )
}