import Card from "./components/Card";

function App() {
  const data = {
    imgUrl:
      "https://static.wikia.nocookie.net/gameofthrones/images/3/34/Eddard_Stark.jpg/revision/latest/scale-to-width-down/350?cb=20190701140812",
    desc: "ned stark",
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h3>Play for fun</h3>
      <div className="cards-container">
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
      </div>
    </div>
  );
}

export default App;