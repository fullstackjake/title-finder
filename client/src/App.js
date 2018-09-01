import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    response: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ response: res[0].TitleName })
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/films/all')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Getting Titles</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    )
  }
}

export default App
