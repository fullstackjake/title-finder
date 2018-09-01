import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './Components/Card'

class App extends Component {
  state = {
    titles: []
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ titles: res })
        // console.log(res)
        console.log(this.state)
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
        {this.state.titles.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    )
  }
}

export default App
