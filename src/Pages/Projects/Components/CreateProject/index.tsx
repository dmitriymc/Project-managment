import { DragEvent, FormEvent, useState } from 'react'
import {useForm} from 'react-hook-form'
import { priorityList } from '../../../../constants/priorityList'
import { projectPriority } from '../../../../Enums/projectPriority'
import { projectState } from '../../../../Enums/projectState'
import { Project } from '../../../../Interfaces/project'
import { imageToB64 } from '../../../../Services/imageToB64'
import { Select } from '../../../../Ui/Select'
import './style.scss'

type createProject = {
    createProject: Function;
}

type createProjectForm = {
    img: string;
    title: string;
    priority: number;
}

export const CreateProject: React.FunctionComponent<createProject> = (props) => {

    const { register, setValue, handleSubmit, errors} = useForm<createProjectForm>();

    const [img, setImg] = useState('');

    //todo any type

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

    const onSubmit = (project: Project) => {
        const item = {
            title: project.title,
            state: projectState.progress,
            priority: projectPriority.hight,
            date: new Date(),
            image: img,
            createdBy: 0
        }

        props.createProject(item);
    
    }    

    

    return(
    <div className="createProject modal">
        <div className="modal-header">
            <h3 className="modal-header__title">Create project</h3>
        </div>
        <div className="modal-container">
            <div className="createProject-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="createProject-container__item">
                    <div className="upload-field" onDragOver={(e) => e.preventDefault()} onDrop={(e) => imageUploadField(e)}>
                        <label className="upload-field__label" htmlFor="img"></label>
                        <span className={`upload-field__span ${img && 'upload-field__span--active'}`}>Upload file</span>
                        <img className={`upload-field__img ${img && 'upload-field__img--active'}`} src={img} />
                        <input className={`upload-field__input ${errors.title ? 'upload-field__input--error' : ''}`} autoComplete="off" placeholder="Enter project title" name="title" ref={register({required: true})} />
                    </div>   
                    <input hidden onChange={(e) => imageUpload(e.target)} id="img" className="input" type="file" accept="image/*" name="img" ref={register} />
                </div>
                <div className="createProject-container__item">
                    <button className="button" type="submit">Create </button>
                </div>
                </form>
            </div>
        </div>
    </div>
    )
}