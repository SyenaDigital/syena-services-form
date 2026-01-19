import styles from './shortTextModule.module.css'


export default function ShortTextModule({ title, fieldName, placeholder, mandatory, setFormInfo }) {


    return (
        <div className={`${styles.boxWrapper} formFieldAnimation`}>
            <h2 className={styles.questionTitle}>{title} {mandatory && <span style={{ color: 'red' }}>*</span>} </h2>
            <div className={styles.answerWrapper}>
                <textarea
                    rows={1}
                    maxLength={800}
                    className={styles.inputLine}
                    placeholder={placeholder || 'resposta aqui'}
                    onInput={(e) => {
                        e.target.style.height = 'auto'
                        e.target.style.height = `${e.target.scrollHeight}px`

                        setFormInfo(prev => ({
                            ...prev,
                            [fieldName]: e.target.value
                        }))
                    }}
                />

            </div>
        </div>
    )
}