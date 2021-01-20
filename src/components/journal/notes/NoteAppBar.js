import React from 'react';
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../../actions/notes';

export const NoteAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave = () => {
        dispatch( startSaveNote( active ) );

    }
    const noteDate = moment(active.date);

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();

    }

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if( file ){
            dispatch( startUploading( file ) );
        }

    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('LLL')}</span>
            <input 
                id = 'fileSelector'
                type = 'file'
                name = 'file'
                style = {{display: 'none'}}
                onChange = { handlePictureChange }    
            />    

            <div>
                <button className="btn" onClick = { handlePictureClick }>Picture</button>
                <button className="btn" onClick= { handleSave }>Save</button>
            </div>
        </div>
    )
}
