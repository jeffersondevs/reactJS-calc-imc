import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered1.png';
import { levels, calculateImc } from './helpers/imc';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem';



function App() {

  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));

    } else {
      alert("Digite todos os campos!")
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }


  return (
    <div className={styles.main}>

      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={50} />
          <span>by Jefferson Santos</span>
        </div>
      </header>

      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex 1.5 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(e.target.value)}
            disabled={toShow ? true : false} //desabilitando o campo para digitar, funciona apenas voltando no botao
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex 75.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(e.target.value)}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem
                  title={item.title}
                  item={item.color}
                  icon={item.icon}
                  imc={item.imc}
                />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem
                title={toShow.title}
                item={toShow.color}
                icon={toShow.icon}
                imc={toShow.imc}
              />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
