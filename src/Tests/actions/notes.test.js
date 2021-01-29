import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { startLoadingNotes, startNewNotes, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn(() => {
        return 'https://hola-mundo.com/fotito.jpg';
    })
}))

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: '6ivJaSgQ0QpKmyMpIEpn',
            title: 'Hola',
            body: 'Mundo'
        }
    }
}
let  store = mockStore( initState )

describe('Pruebas con las acciones de notes', () => {

    beforeEach( () => {
        store = mockStore(initState)
    })
    test('Debe de creaer una nueva nota startNewNote', async () => {
        jest.setTimeout(20000);
            await store.dispatch( startNewNotes() );
            const actions  = store.getActions();

            expect (actions[0]).toEqual ({
                type: types.notesActive,
                payload: {
                    id: expect.any(String),
                    title : '',
                    body: '',
                    date: expect.any(Number)
                }
            });

            expect( actions[1]).toEqual({
                type: types.notesAddNew,
                payload: {
                    id: expect.any(String),
                    title : '',
                    body: '',
                    date: expect.any(Number)
                }
            });
            
            const docId = actions[1].payload.id;
            await db.doc(`TESTING/journal/notes/${docId}`).delete();
    });

    // test('StartLoadingNotes debe de cargar las notas', async() => {
    //     jest.setTimeout(20000)
    //     await store.dispatch( startLoadingNotes('TESTING') );
    //     const actions = store.getActions();

    //     expect( actions[0] ).toEqual({
    //         type: types.notesLoad,
    //         payload: expect.any(Array)
    //     })
        
    // })

    test('StartSaveNOte debe funcionar', async () => {

        const note = {
            id: '6ivJaSgQ0QpKmyMpIEpn',
            title: 'titulo',
            body: 'body',
        }

        await store.dispatch(startSaveNote(note));
        const actions  = store.getActions();
        console.log(actions);

        expect ( actions[0].type).toBe(types.notesUpdated);
        // const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
        // expect( docRef.data().title ).toBe(note.title);
        
    })

    test('startUploading debe de crear el url del entry ', async () => {

        const file = new File([], 'foto.jpg');
        await store.dispatch(startUploading( file ));

        // const docRef = await db.doc('/TESTING/journal/notes/6ivJaSgQ0QpKmyMpIEpn').get();
        
    })
    
    
    
    
    
})

