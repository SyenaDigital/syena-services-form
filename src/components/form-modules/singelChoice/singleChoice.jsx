import { useState } from 'react'
import styles from './singleChoice.module.css'

export default function SingleChoice({ fieldName, mandatory, setFormInfo, title, opts }) {

    const [selectedOpts, setSelectedOpts] = useState([])

    function toggleOption(option){
        setSelectedOpts(option)
        setFormInfo(prev => ({...prev, [fieldName]:option}))
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
