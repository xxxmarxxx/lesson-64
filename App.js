class App extends React.Component {
  state = {
    result: 1,
    ratio: 2,
    
  };

  handleMultiplication = () => {
    this.setState((state) => (
      {
        result: state.result * state.ratio
      }))
      console.log(this.state);
  }

  componentDidUpdate(){
    if(this.state.result > 1000 && this.state.ratio === 2){
      this.setState({
        ratio: 0.5
      })
    } else if(this.state.result < 1 && this.state.ratio === 0.5){
      this.setState({
        ratio: 2
      })
    }
  }

  render() {
    return (
      <>
      <h1>Lesson 64 Kalkulator</h1>
      <p>Kalkulator mnozy przez dwa, jesli suma jest mniejsza niz 1000. Po przekroczeniu 1000 Kalkulator mnozy prez 0.5 az osiagnie sume mniejsza niz jeden. Wtedy ponownie zaczyna mnozyc przez dwa. </p>
      <button onClick={this.handleMultiplication}>{`Pomoz przez ${this.state.ratio}`}</button>
    <h1>Wynik: {this.state.result}</h1>

      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
