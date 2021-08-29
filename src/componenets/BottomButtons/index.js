import Container from './styles';
import NewButton from './NewButton';
import EraseButton from './EraseButton';
import HintButton from './HintButton';
import SolveButton from './SolveButton';

const BottomButtons = () => {

    return (
        <Container>
            <NewButton></NewButton>
            <SolveButton ></SolveButton>
            <HintButton></HintButton>
            <EraseButton></EraseButton>
        </Container>
    )
}

export default BottomButtons;
