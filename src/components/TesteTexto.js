import styles from './TesteTexto.module.css'

function TesteTexto(){
    return(
        <div className={styles.textoContainer}>
            <p className={styles.textoContent}>Mais um dia estudando React</p>
        </div>
            )
}

export default TesteTexto