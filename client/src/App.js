import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './Components/Card'
import Search from './Components/Search/Search'

class App extends Component {
  state = {
    titles: [],
    title: ''
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

  handleSearch = (e, title) => {
    e.preventDefault()
    console.log(title)

    this.searchApi(title)
      .then(res => {
        this.setState({ titles: res })
        console.log(this.state)
      })
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/films/all', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  searchApi = async title => {
    const response = await fetch(`/api/films/titles?title=${title}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)
    console.log(body)
    return body
  }

  render() {
    let noResults = false

    if (this.state.titles === undefined || this.state.titles.length === 0) {
      noResults = true
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Getting Titles</h1>
        </header>
        <div className="container">
          <Search handleSearch={this.handleSearch} />
          <div className="row">
            {this.state.titles.map((title, index) => (
              <Card key={index} title={title} />
            ))}
          </div>
          {noResults ? <h1>Sorry, no results</h1> : null}
        </div>
      </div>
    )
  }
}

export default App
