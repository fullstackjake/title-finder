import React, { Component } from 'react'

// const Card = props => (
//   <div>
//     <h1>{props.titleName}</h1>
//   </div>
// )

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.gatherRoles = this.gatherRoles.bind()
  }

  gatherRoles = (roles, roleType) => {
    let participants = []
    let count = roles.length
    for (let i = 0; i < count; i++) {
      if (roles[i].RoleType === roleType) {
        participants.push(roles[i].Name)
      }
    }

    return participants.join(', ').trim()
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.title.TitleName} ({this.props.title.ReleaseYear})
        </h1>
        <span>
          <strong>Genres: </strong>
          {this.props.title.Genres.join(', ').trim()}
        </span>
        <p>{this.props.title.Storylines[1].Description}</p>
        <ul>
          <li>
            <span className="director">
              Directors:{' '}
              {this.gatherRoles(this.props.title.Participants, 'Director')}
            </span>
          </li>
          <li>
            <span className="actor">
              Directors:{' '}
              {this.gatherRoles(this.props.title.Participants, 'Actor')}
            </span>
          </li>
          <li>
            <span />
          </li>
        </ul>
      </div>
    )
  }
}

export default Card
