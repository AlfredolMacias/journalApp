import { types } from "../../types/types"

describe('Pruebas en el archivo types', () => {

    test('Deben de coincidir los tipos', () => {

        expect( types ).toEqual({
                login: '[Auth] Login',
                logout: '[Auth] Logout',

                uiSetError: '[UI] Set Error',
                uiRemoveError: '[UI] Remove Error',

                uiStartLoading: '[UI] Start loading',
                uiFinishLoading: '[UI] Finish loading',

                notesAddNew: '[Notes] New notes',
                notesActive: '[Notes] Set active notes',
                notesLoad: '[Notes] Load notes',
                notesUpdated: '[Notes] Update note',
                notesFileUrl: '[Notes] Update image url',
                notesDelete: '[Notes] Deleta note',
                notesLogoutCleaning: '[Notes] Logout Cleaning',
        })
        
    })
    
    
})
