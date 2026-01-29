import styles from './multipleChoice.module.css'

export default function MultipleChoice({ fieldName, mandatory, formInfo, setFormInfo, title, opts }) {

    function toggleOption(option) {
        const currentValues = formInfo?.[fieldName] || []
        const updated = currentValues.includes(option)
            ? currentValues.filter(o => o !== option)
            : [...currentValues, option]

        setFormInfo(form => ({
            ...form,
            [fieldName]: updated
        }))
    }

    const selectedOpts = formInfo?.[fieldName] || []

    return (
        <div className={`${styles.boxWrapper} formFieldAnimation`}>
            <h2 className={styles.questionTitle}>
                {title} {mandatory && <span style={{ color: 'red' }}>*</span>}
            </h2>

            <div className={styles.optionsWrapper}>
                {opts.map(option => (
                    <div
                        key={option}
                        className={styles.optionWrapper}
                    >
                        <div
                            onClick={() => toggleOption(option)}
                            className={styles.optionCheckbox}
                            style={selectedOpts.includes(option) ? { backgroundColor: '#eefd22ff' } : {}}
                        >
                            {selectedOpts.includes(option) ? '✓' : ''}
                        </div>
                        <span>{option}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}