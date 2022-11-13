import React from 'react';
import styles from '../../styles/Neibur.module.css'


export default function EventItem({title, description}) {
    return (
        <section className={styles.sidebar_elements}>
            <div>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>
        </section>
    );
}