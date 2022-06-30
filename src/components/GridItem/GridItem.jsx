import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';




export const GridItem = ({title, item, icon, imc, yourImc}) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item }}>

            <div className={styles.gridIcon}>
                <img src={icon === 'up' ? upImage : downImage} alt="" width="30" />
            </div>
            <div className={styles.gridTitle}>{title}</div>
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{imc[0]}</strong> e <strong>{imc[1]}</strong>
                </>
            </div>
        </div>
    );
}