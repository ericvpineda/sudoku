// import Game from "./componenets/Game/Game"
import {Content, Title, Card, Grid, Number} from './componenets'
import TopButtons from './componenets/TopButtons';
import BottomButtons from './componenets/BottomButtons';

function App() {
  return (
      <Content data="content">
        <Title data="title">Sudoku</Title>
        <Card data="card">
          <TopButtons></TopButtons>
          <Grid></Grid>
          <BottomButtons></BottomButtons>
          <Number></Number>
        </Card>
      </Content>
  );
}

export default App;
