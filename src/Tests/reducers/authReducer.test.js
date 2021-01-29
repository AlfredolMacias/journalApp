import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en AuthReducer', () => {

    test('Debe de retornar el objeto del login', () => {
        const initialState = {};
        const action = {
            type: types.login,
            payload: {
                uid: '123',
                displayName: 'Alfredo'
            }
        }

        const state  =authReducer(initialState, action);

        expect( state ).toEqual({
            uid: '123',
            name: 'Alfredo'
        })

    });

    test('Debe de regresar el objeto vacio', () => {
        const initialState = { 
            uid: '123',
            name: 'Alfredo'
        };
        const action = {
            type: types.logout
        }

        const state  =authReducer(initialState, action);

        expect( state ).toEqual({})

    });

    test('Debe de regresar el mismo objeto', () => {
        const initialState = { 
            uid: '123',
            name: 'Alfredo'
        };
        const action = {
            type: types.logout12121
        }

        const state  =authReducer(initialState, action);

        expect( state ).toEqual( initialState )
    })
    
    
    
    
})
