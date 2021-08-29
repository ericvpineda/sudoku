import Button from '../../Number/button/styles'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCell } from '../../../reducers';

const EraseButton = () => {
    
    const dispatch = useDispatch()
    const state = useSelector(({workingGrid, selectedCell,solved}) => 
    ({workingGrid, selectedCell, solved}))

    const eraseCellHandler = () => {
        dispatch(deleteCell(state.selectedCell))
    }

    return (
        <Button disabled={state.solved} onClick={eraseCellHandler}>Erase</Button>
    )
}

export default EraseButton;