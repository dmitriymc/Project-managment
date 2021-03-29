import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { User } from '../../Interfaces/user';
import { Button } from '../../Ui/Button';
import * as usersCreators from '../../Actions/usersAction'
import './style.scss'
import { State } from '../../Interfaces/state';
import { Select } from '../../Ui/Select';
import { rolesList } from '../../constants/rolesList';
import { useForm } from 'react-hook-form';
import { imageToB64 } from './../../Services/imageToB64'
import { withRouter } from 'react-router';

type user = {
    newUser: Function,
    users: User[],
    loading: boolean,
    user: User,
    match: any,
    history: any
}

const Profile: React.FunctionComponent<user> = (props) => {

    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState<User | any>(null)
    const [img, setImg] = useState('');
    const { register, setValue, handleSubmit, formState, errors, watch} = useForm<User>();

    useEffect(() => {
        let profile = props.users.find(user => user.id == props.match.params.userId);
        setUser(profile)
        setImg(profile?.avatar as string)
    }, [props.match.params.userId])

    const imageUpload = async (e: any) => {
        let img: any = await imageToB64(e.files[0]);
        setImg(img)
    }

    const imageUploadField = (e: any) => {
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

        //props.createUser(userForm);
        console.log(userForm)
    
    }

        return(
            <div className="page">
                    <div className="page-header">
                        <Button className={'page-header__button--left'} align="left" title="Go back" type="large" img={'<i class="fas fa-chevron-left"></i>'} onClick={() => props.history.push('/users')} />
                        <div className="page-header__title">
                            <h2 className="page-title">Profile</h2>
                        </div> 
                        {props.user?.role === 0 && <Button className="page-header__button--right" title="Edit" align="right" img={'E'} titleActive="Close edit" active={edit} onClick={() => setEdit(!edit)} type="large" />}
                    </div>
                    <div className="page-content">
                        <div className="profile">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <fieldset disabled={!edit}>
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
                                                <input className="input createUser-container__input" autoComplete="off" defaultValue={user?.login} placeholder="Enter login" name="login" ref={register({required: true})} />
                                                {errors.login && <span className="createUser-container__error">Field is required</span>}
                                            </div>
                                            <div className="createUser-container__item">
                                                <input className="input createUser-container__input" autoComplete="off" defaultValue={user?.name} placeholder="Enter name" name="name" ref={register({required: true})} />
                                                {errors.name && <span className="createUser-container__error">Field is required</span>}
                                            </div>
                                            <div className="createUser-container__item">
                                                <input className="input createUser-container__input" autoComplete="off" defaultValue={user?.email} placeholder="Enter email" name="email" ref={register({required: true})} />
                                                {errors.email && <span className="createUser-container__error">Field is required</span>}
                                            </div>
                                            {edit && <div className="createUser-container__item">
                                                <button className="button" type="submit">Update</button>
                                            </div>}
                                        </div>
                                    </div>
                                </fieldset>
                            </form> 
                        </div>
                    </div>
                </div>
        )

}

const mapStateToProps = (state: State) => {
    return {
        users: state.users.users,
        user: state.user.user,
        loading: state.users.loading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    console.log(dispatch)
    return bindActionCreators(usersCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
    