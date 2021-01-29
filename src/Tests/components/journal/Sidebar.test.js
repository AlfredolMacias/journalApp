import { mount } from "enzyme";
import { Provider } from "react-redux";
import { Sidebar } from "../../../components/journal/Sidebar";
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { startLogout } from "../../../actions/auth";
import { startNewNotes } from "../../../actions/notes";

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}))

jest.mock('../../../actions/notes', () => ({
    startNewNotes: jest.fn(),
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
        active:null,
        notes:[]
    }
}

let  store = mockStore( initState )
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store = {store } >
        <Sidebar />
    </Provider>
);

describe('Pruebas en <Sidebar />', () => {



    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de llamar el logout', () => {
        //Debe de llamar la accion del logout
        wrapper.find('.btn').prop('onClick')();
        expect(startLogout).toHaveBeenCalled();


    });

    test('Debe de llamar el StartNewNote', () => {
        //Como el logout
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect( startNewNotes ).toHaveBeenCalled();
        
    })
    
    
    
    
})
