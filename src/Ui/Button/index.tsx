import './style.scss'

type buttonProps = {
    title?: string;
    titleActive?: string;
    className?: string;
    align?: string;
    img?: string;
    type?: string;
    active?: boolean;
    onClick?: any;
}

export const Button: React.FunctionComponent<buttonProps> = (props) => {

    // Large, Meddium, Small

    const createHtml = () => {
        return {__html: props.img ? props.img : '+'}
    }

    return <button onClick={props.onClick} className={`button-l ${props.className ? props.className : ''} ${props.align === 'right' ? 'button-l--right' : ''} ${props.active ? 'button-l--active' : ''}`}>
        {props.align !== "right" ? 
        <>
        <span className="button-l__icon"><strong dangerouslySetInnerHTML={createHtml()}></strong></span>
        <span className="button-l__title">{!props.active ? props.title : props.titleActive}</span>
        </> : 
        <>
        <span className="button-l__title">{!props.active ? props.title : props.titleActive}</span>
        <span className="button-l__icon"><strong dangerouslySetInnerHTML={createHtml()}></strong></span>
        </>
        }
        </button>
}