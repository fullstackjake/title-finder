import React, { Component } from 'react'
import './Card.css'

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
    this.cutLongDesc = this.cutLongDesc.bind()
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

  cutLongDesc = desc => {
    if (desc.length > 100) {
      return desc.substring(0, 96) + '...'
    } else {
      return desc
    }
  }

  render() {
    return (
      <div className="col-md-4">
        {/* <h1>
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
        </ul> */}

        <div className="card">
          {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
          <div className="card-body">
            <h6 className="card-title titleName">
              {this.props.title.TitleName} ({this.props.title.ReleaseYear})
            </h6>
            <p className="card-text">
              {this.cutLongDesc(this.props.title.Storylines[1].Description)}
            </p>
            <a href="#" className="btn btn-primary">
              More Details
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
