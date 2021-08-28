// import Game from "./componenets/Game/Game"
import {Content, Title, Card, Grid, Number, NewGameButton} from './componenets'

function App() {
  return (
      <Content data="content">
        <Title data="title">Sudoku</Title>
        <Card data="card">
          <NewGameButton></NewGameButton>
          <Grid></Grid>
          <Number></Number>
        </Card>
      </Content>
  );
}

export default App;
