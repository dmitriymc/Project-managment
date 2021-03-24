import { DragEvent, useRef, useState } from 'react'
import {useForm} from 'react-hook-form'
import { priorityList } from '../../../constants/priorityList'
import { rolesList } from '../../../constants/rolesList'
import { imageToB64 } from '../../../Services/imageToB64'
import { projectState } from '../../../Enums/projectState'
import { Project } from '../../../Interfaces/project'
import { User } from '../../../Interfaces/user'
import { Select } from '../../../Ui/Select'
import './style.scss'

interface createUser {
    createUser: Function;
}

export const CreateUser: React.FunctionComponent<createUser> = (props) => {

    const { register, setValue, handleSubmit, formState, errors, watch} = useForm<User>();
    
    const [img, setImg] = useState('');

    const imageUpload = async (e: any) => {
        let img: any = await imageToB64(e.files[0]);
        setImg(img)
    }

    const imageUploadField = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        let image = e.dataTransfer;
        imageUpload(image)
    }
    
    const password = useRef({});
    password.current = watch('password','')
    const onSubmit = (user: User) => {
        const userForm = {
            login: user.login,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: img,
            password: user.password,
            r_password: user.r_password,
        }

        props.createUser(userForm);
        console.log(userForm)
    
    }    

    

    return(
    <div className="createUser modal">
        <div className="modal-container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="createUser-container">
            
                <div className="createUser-container__left">
                <div className="upload-field upload-avatar" onDragOver={(e) => e.preventDefault()} onDrop={(e) => imageUploadField(e)}>
                        <label className="upload-field__label" htmlFor="img"></label>
                        <span className={`upload-field__span upload-avatar__span ${img && 'upload-field__span--active'}`}>Upload file</span>
                        <img className={`upload-field__img ${img && 'upload-field__img--active'}`} src={img} />
                    </div> 
                    <input hidden onChange={(e) => imageUpload(e.target)} id="img" className="input" type="file" accept="image/*" name="img" ref={register} />  
                </div>
                <div className="createUser-container__right">
                
                    <div className="createUser-container__item">
                        <input className="input createUser-container__input" autoComplete="off" placeholder="Enter login" name="login" ref={register({required: true})} />
                        {errors.login && 'Field is required'}
                    </div>
                    <div className="createUser-container__item">
                        <input className="input createUser-container__input" autoComplete="off" placeholder="Enter name" name="name" ref={register({required: true})} />
                        {errors.name && 'Field is required'}
                    </div>
                    <div className="createUser-container__item">
                        <input className="input createUser-container__input" autoComplete="off" placeholder="Enter email" name="email" ref={register({required: true})} />
                        {errors.email && 'Field is required'}
                    </div>
                    <div className="createUser-container__item">
                        <input className="input createUser-container__input" autoComplete="off" placeholder="Enter password" name="password" ref={register({required: true, minLength: 8})} />
                        {errors.password && 'Field is required'}
                    </div>
                    <div className="createUser-container__item">
                        <input className="input createUser-container__input" autoComplete="off" placeholder="Repeat password" name="r_password" ref={register({required: true, validate: value => value === password.current || 'ERROR'})} />
                        {errors.r_password && <p>{errors.r_password.message}</p>}
                    </div>
                    <div className="createUser-container__item">
                        <Select items={rolesList} default={0} name="role" register={register({required: true})} placeholder={'user role'} />
                        {errors.role && 'Field is required'}
                    </div>
                    <div className="createUser-container__item">
                        <button className="button" type="submit">Create</button>
                    </div>
                </div>
            </div>
            </form> 
        </div>
    </div>
    )
}