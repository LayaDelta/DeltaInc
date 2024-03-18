import Button from '../../atoms/Button/Button'
import { useState } from 'react'
import Colab from '../../molecules/Colaboradores/Colab'
import styles from "./ColumRigth.module.css"
function ColumRigth({customClass}) {
  const Arr = ({text, textProfile}) => {
    return <Colab text={text} textProfile={textProfile}/>
  }

  
    const data = [
      { text: 'Juan', textProfile: "Profile 1" },
      { text: 'Pedro', textProfile: 'Profile 2' },
      { text: 'Jose', textProfile: 'Profile 3' },
      { text: 'Pedro', textProfile: 'Profile 2' },
      { text: 'Jose', textProfile: 'Profile 3' },
    ];
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    }
  return (<>
  <div className={styles.ColumRigth}>
   <Button  customClass={styles.ColumRigth__Button} text="Colaboradores" onClick={handleClick}/>
    <div className={`${styles.ColumRigth__Compact} ${!isActive ? styles.ColumRigth__Content : ""} ${customClass}`}>
      {data.map((Item, index) => (
        <Arr key={index} text={Item.text} textProfile={Item.textProfile}/>
      ))}
    </div>
    </div>
    </>
  )
}
export default ColumRigth
