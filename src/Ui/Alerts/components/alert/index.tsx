import { useEffect, useState } from 'react'
import { Alert } from '../../../../Interfaces/alert'
import './style.scss'

type buttonProps = {
    alert: Alert;
}

export const AlertComponent: React.FunctionComponent<buttonProps> = (props) => {

    const [active, setActive] = useState(true);
    const [render, notRender] = useState(true)

    const hideAlert = (e: any) => {
        setActive(false);
        hideAlertElement();
    }

    useEffect(() => {
        console.log(props.alert.title)
        setTimeout(() => {
            setActive(false)
            hideAlertElement();
        }, 5000);
    }, [props.alert])

    

    const hideAlertElement = () => {
        setTimeout(() => {
            notRender(false)
        }, 1000);
    }
    
    return <>{render && <div className={`alerts-item ${props.alert.status ? 'alerts-item--success' : 'alerts-item--error'} ${!active ? 'alerts-item--hidden' : ''}`} onClick={hideAlert}>
        <span className="alerts-item__title">{props.alert.title}</span>
    </div>}</>
}