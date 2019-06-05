import React from 'react';
import './App.css';
import generate from "nanoid/generate"

let setNumbers = "0123456789";
let setLowercase = "qwertyuiopasdfghjklzxcvbnm";
let setUppercase = setLowercase.toUpperCase();
let setSymbols = "_-@#$%^&*";

class App extends React.Component {
  state = {
    Length: 6,
    Lowercase: false,
    Uppercase: false,
    Symbols: "",
    password: "",
  };

  generate = () => {
    let {Length, Lowercase, Uppercase, Symbols} = this.state;
    let setPassword = setNumbers + (Lowercase ? setLowercase : "") + (Uppercase ? setUppercase : "") + (Symbols   ? setSymbols   : "");
    this.setState({ password: generate(setPassword, Length),
    })
  };

  render() {
    let {Length, Lowercase, Uppercase, Symbols, password} = this.state

    return <div className='example'>
      <h4>Generate a secure password</h4>
      <div>
        <input value={password}/>
      </div>
      <div>
        <br/>
        <div>
          <label>Length</label>
          <input type="range" value={Length} onChange={e => this.setState({Length: Number(e.target.value)})}
                 min={5} max={12}/> {Length}
        </div>
        <br/>
        <div>
          <label>Numbers (always enabled)</label>
        </div>
        <br/>
        <div>
          <input type="checkbox" checked={Lowercase} onChange={e => this.setState({Lowercase: e.target.checked})}/>
          <label>Lowercase</label>
        </div>
        <br/>
        <div>
          <input type="checkbox" checked={Uppercase} onChange={e => this.setState({Uppercase: e.target.checked})}/>
          <label>Uppercase</label>
        </div>
        <br/>
        <div>
          <input type="checkbox" checked={Symbols} onClick={e => this.setState({Symbols: e.target.checked})}/>
          <label>Symbols</label>
        </div>
        <br/>
        <button type="button" onClick={this.generate}>Generate</button>
      </div>
    </div>
  }
}
export default App;
