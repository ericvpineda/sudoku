import Button from '../../Number/button/styles'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCell } from '../../../reducers';

const EraseButton = () => {
    
    const dispatch = useDispatch()
    const state = useSelector(({workingGrid, selectedCell}) => 
    ({workingGrid, selectedCell}))

    const eraseCellHandler = () => {
        dispatch(deleteCell(state.selectedCell))
    }

    return (
        <Button onClick={eraseCellHandler}>Erase</Button>
    )
}

export default EraseButton;