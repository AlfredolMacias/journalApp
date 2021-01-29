import { RemoveError, setError, uiFinishLoading, uiStartLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Pruebas en ui-action', () => {

    test('Todas las acciones deben de funcionar ', () => {

        const action = setError('Helppp');

        expect (action).toEqual({
            type: types.uiSetError,
            payload: 'Helppp',
        })
        
        const RemoveErrorAction = RemoveError ();
        const uiStartLoadingAction = uiStartLoading ();
        const uiFinishLoadingAction = uiFinishLoading ();

        expect (RemoveErrorAction) .toEqual({
            type: types.uiRemoveError,
        });
        expect (uiStartLoadingAction) .toEqual({
            type: types.uiStartLoading
        })
        expect (uiFinishLoadingAction) .toEqual({
            type: types.uiFinishLoading,
        })
        
    })
    
    
})
