import { Alert } from '../../Interfaces/alert'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './style.scss'
import { AlertComponent } from './components/alert'

type buttonProps = {
    alerts: Alert[];
}

export const AlertsComponent: React.FunctionComponent<buttonProps> = (props) => {
    
    return <div className="alerts">
        <PerfectScrollbar className="alerts-container">
            <div className="alerts-content">
            {props.alerts.map((alert, index) => 
                <AlertComponent key={index} alert={alert}></AlertComponent>
            )
            }
            </div>
        </PerfectScrollbar>
    </div>
}