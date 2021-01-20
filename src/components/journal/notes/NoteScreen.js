import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from '../../../actions/notes';
import { useForm } from '../../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes)
    const dispatch = useDispatch();
    const [ formValues, handleInputChange, reset ] = useForm( note );

    const { title, body, id } = formValues; 

    const activeId = useRef( note.id );

    useEffect(() => {
        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {

        dispatch( activeNote(formValues.id, {...formValues}));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch( startDeleting ( id ) );
    }

    return (
        <div className="notes__main-content">
            <NoteAppBar />

            <div className="notes__content">

                <input 
                    type='text'
                    placeholder="Something Cool..."
                    name = 'title'
                    className='notes__title-input'
                    value = { title }
                    autoComplete= 'off'
                    onChange = { handleInputChange }
                />

                <textarea
                    placeholder="What's up today?"
                    className="notes__textarea"
                    name = 'body'
                    value = { body }
                    autoComplete = 'off'
                    onChange = { handleInputChange }
                >
                </textarea>
                {
                    (note.url ) &&
                    <div className="notes__image">
                        <img alt="Algo" src={ note.url} />


                    </div>
                }

            </div>
            
            <button
                className="btn btn-danger"
                onClick = { handleDelete }
            >
                Eliminar
            </button>
        </div>
    )
}
