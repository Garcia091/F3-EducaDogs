import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCard, dogNew, Edit, Listar } from '../actions/dogAction'
import { useForm } from '../hooks/useForm'

const FormAdd = () => {

    const { active } = useSelector(state => state.dog)

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active)
        }
        activeId.current = active.id
    }, [active])

  

    const [formValue, handleInputChange, reset] = useForm(active)
    const { url, name, description } = formValue

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
        if (active.name === "") {
            dispatch(dogNew(formValue))
            reset()
          } else if(active.id !== ""){
            dispatch(Edit(formValue))
          }
         
    }



    useEffect(() => {
        dispatch(Listar())
    }, [dispatch])



    return (
        <form onSubmit={handleSubmit} className="card card-body border-primary">
            <div className="form-group input-group ">
                <div className="input-group-text bg-light ">
                    <i className="material-icons">insert_link</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Url"
                    name="url"
                    value={url}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group mt-3">
                <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Write a Description"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                ></textarea>
            </div>

            <button className="btn btn-dark mt-3">Save</button>
        </form>
    )
}

export default FormAdd
