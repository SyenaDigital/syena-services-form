import { useState } from 'react'
import styles from './multipleChoice.module.css'

export default function MultipleChoice({ fieldName, mandatory, setFormInfo, title, opts }) {

    const [selectedOpts, setSelectedOpts] = useState([])

    function toggleOption(option) {
        const updated = selectedOpts.includes(option)
            ? selectedOpts.filter(o => o !== option)
            : [...selectedOpts, option]


        setSelectedOpts(updated)


        setFormInfo(form => ({
            ...form,
            [fieldName]: updated
        }))
    }

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
                        <div onClick={() => toggleOption(option)} className={styles.optionCheckbox} style={selectedOpts.includes(option) ? { backgroundColor: '#eefd22ff' } : {}}>
                            {selectedOpts.includes(option) ? '✓' : ''}
                        </div>
                        <span>{option}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}