import { Text, View } from "react-native";

const styles = {
  app: {
    flex: 7, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400
  },
  row: {
    flexDirection: "row",
    backgroundColor: "green"
  },
  col:  {
    flex:  1
  }
};

const Col = ({ children }) => {
  return  (
    <View style={styles.col}>{children}</View>
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

const Header = ({players}) => {
  return (
    <Row>
        <Col></Col>
        {players.map(({name}, index) =>(<Col key={index}><Text>{name}</Text></Col>))}
    </Row>
  )
}

const Body = ({games, players}) => {
  return (
    <>
        {games.map((game, index) =>(<RowBody key={index} game={game} players={players}/>))}
    </>
  )
}

const RowBody = ({game, players}) => {
  return (
    <Row>
        <Col><Text>{game.name}</Text></Col>
        {players.map((item, index) =>(<Col key={index}><Text>0</Text></Col>))}
    </Row>
  )
}

export default function Score() {
  const players=[{name: 'Fran'},{name: 'Pablo'},{name: 'Maira'},{name: 'Rafa'},{name: 'Jose'},{name: 'Rocio'}]
  const games = [
    {name: '1', default: 1},
    {name: '2', default: 2},
    {name: '3', default: 3},
    {name: '4', default: 4},
    {name: '5', default: 5},
    {name: '6', default: 6},
    {name: 'Escalera', default: 20},
    {name: 'Full', default: 30},
    {name: 'Poker', default: 40},
    {name: 'Generala', default: 50},
    {name: 'Generala 2', default: 100},
  ]
  return (
    <View style={styles.app}>
      <Header players={players}/>
      <Body games={games} players={players} />
    </View>
  );
}
