import React from 'react';
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/journal/notes/NoteScreen';


jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),
}))

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        uid: '1',
        name: 'Alfredo',

    },
    ui: {
        loading: false,
        msgError: null
    },
    notes:{
        active:{
            id: 1234,
            title:'Hola',
            body: 'Mundo',
            date: 0
        },
        notes:[]
    }
}

let  store = mockStore( initState )
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store = {store } >
        <NoteScreen />
    </Provider>
);

describe('Pruebas en el componente <NoteScreen/>', () => {

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de disparar el activeNote', () => {

        wrapper.find('input[name="title"]').simulate('change',{
            target:{
                name: 'title',
                value: 'Hola Mundo'
            }
        });
        expect(activeNote).toHaveBeenLastCalledWith(
            1234,
            {
                title: 'Hola Mundo',
                body: 'Mundo',
                id: 1234,
                date:0
            }
        );
    })
    
    
    
})
