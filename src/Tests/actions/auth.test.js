import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";import { types } from "../../types/types";

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares);

const initState = {}

let  store = mockStore( initState )

describe('Pruebas en las acciones de Auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    })

    test('Login y logout deben de hacer las acciones respectivas', () => {

        const loginAction = login('123', 'Alfredo');
        expect( loginAction ).toEqual(
            {type: types.login,
            payload:{
                uid: '123',
                displayName: 'Alfredo'   
            }}
        )

        const logoutAction = logout();
        expect( logoutAction ).toEqual({
            type: types.logout
        })
        
    });

    test('Debe de realizar el StartLogout', async() => {

        await store.dispatch( startLogout());
        const actions = store.getActions();
        console.log(actions);

        expect(actions[0]).toEqual({
            type: types.logout
        })
        
        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        })
        
    });


    test('debe de iniciar StartLoginWithEmailAndPassword', async() => {

        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456'));
        const actions = store.getActions();
        console.log(actions);
        // expect(actions[1]).toEqual({
        //     type: types.login,

        // })



        
    })
    
    
    
    
})
