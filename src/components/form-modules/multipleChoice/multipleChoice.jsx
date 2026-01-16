import { useState } from 'react'
import styles from './multipleChoice.module.css'

export default function MultipleChoice({ fieldName, mandatory, setFormInfo, title, opts }) {

    const [selectedOpts, setSelectedOpts] = useState([])

    function toggleOption(option) {
        setSelectedOpts(prev => {
            const updated = prev.includes(option)
                ? prev.filter(o => o !== option)
                : [...prev, option]

            setFormInfo(form => ({
                ...form,
                [fieldName]: updated
            }))

            return updated
        })
    }

    return (
        <div className={styles.boxWrapper}>
            <h2 className={styles.questionTitle}>
                {title} {mandatory && <span style={{ color: 'red' }}>*</span>}
            </h2>

            {opts.map(option => (
                <div
                    key={option}
                    onClick={() => toggleOption(option)}
                    className={styles.optionWrapper}
                >
                    <div className={styles.optionCheckbox} style={selectedOpts.includes(option) ? {backgroundColor:'#eefd22ff'} : {}}>
                
                    </div>
                    <span>{option}</span>
                </div>
            ))}
        </div>
    )
}
