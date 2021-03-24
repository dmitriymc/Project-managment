import { useEffect, useState } from 'react'
import './style.scss'

type selectProps = {
    default?: number;
    placeholder?: string;
    search?: boolean;
    searchName?: string;
    optionName?: string;
    readonly?: boolean;
    items: any[];
    register: any;
    name: string;
    mode?: string;  // points // teams // users
}

export const Select: React.FunctionComponent<selectProps> = (props) => {

    const defaultItem = props.default ? props.items.find(item => item['id' || props.searchName?.toLowerCase()] == props.default) : props.items[0]

    const [active, setActive] = useState(false);
    const [value, setValue] = useState(defaultItem);

    
    const select = (selectedItem: any) => {    
        let item = props.items.find(item => item['id' || props.searchName?.toLowerCase()] == selectedItem['id' || props.searchName?.toLowerCase()]);
        setValue(item);
        setActive(false);  
    }

    useEffect(() => {
        document.addEventListener('mousedown', selectHide)

        return () => {
            document.removeEventListener('mousedown', selectHide);
        }


    },[])

    const selectHide = (event: any) => {
        const select = document.querySelector('.select');
        
        if(!event.target.classList.contains('select-items__item') && !event.target.classList.contains('select-input')){
            setActive(false);
        }
    }

    

    return(
        <div className="select" onBlur={() => setActive(false)}>
            <div className="select-field" onClick={() => setActive(!active)}>
                <input name={props.name} placeholder={props.placeholder} value={value['id' || props.optionName]} className="select-input" readOnly={!props.search || true} autoComplete="off" ref={props.register}></input>
                {value && <div className="select-field__content">
                    {value.color && <div className={`item-circle ${value.color}`}></div>}{value.name}
                </div>}
            </div>
            {active && <div className="select-items">
                {props.items.map((item, index) => 
                    
                    <div onMouseDown={() => select(item)} key={index} className="select-items__item">
                        {item.color && <div className={`item-circle ${item.color}`}></div>}{item.name}
                    </div>
                    
                )}
                
            </div>}
        </div>
    )
    
}