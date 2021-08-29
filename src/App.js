// import Game from "./componenets/Game/Game"
import {Content, Card, Grid, Number} from './componenets'
import TopButtons from './componenets/TopButtons';
import BottomButtons from './componenets/BottomButtons';

function App() {
  return (
      <Content data="content">
        

        <Card data="card">
          <TopButtons></TopButtons>
          <Grid></Grid>
        </Card>
        
        <br></br>
        
        <Card>
          <BottomButtons></BottomButtons>
          <Number></Number>
        </Card>
        
      </Content>
  );
}

export default App;
