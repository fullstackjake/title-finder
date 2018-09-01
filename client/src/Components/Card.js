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
    this.state = { details: false, activeCard: 'inActvieCard' }
    this.gatherRoles = this.gatherRoles.bind()
    this.cutLongDesc = this.cutLongDesc.bind()
    this.moreDetail = this.moreDetail.bind()
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

  moreDetail = e => {
    e.preventDefault()
    if (this.state.details === false) {
      this.setState({ details: true, activeCard: 'activeCard' })
    } else {
      this.setState({ details: false, activeCard: 'inActiveCard' })
    }
  }

  render() {
    return (
      <div className="col-md-4 ">
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

        <div className={'card ' + this.state.activeCard}>
          {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
          <div className="card-body">
            <h6 className="card-title titleName">
              {this.props.title.TitleName} ({this.props.title.ReleaseYear})
            </h6>
            <p className="genres">
              {this.props.title.Genres.join(', ').trim()}
            </p>
            <p className="card-text">
              {this.state.details
                ? `${this.props.title.Storylines[1].Description}`
                : `${this.cutLongDesc(
                    this.props.title.Storylines[1].Description
                  )}`}
            </p>
            <div className="card-body">
              <a
                onClick={e => this.moreDetail(e)}
                href=""
                className="btn btn-primary">
                More Details
              </a>
            </div>
            {this.state.details ? (
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="detailsTitle">Director:</span>
                  <span className="detailsDesc">
                    {this.gatherRoles(
                      this.props.title.Participants,
                      'Director'
                    )}
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="detailsTitle">Writers:</span>
                  <span className="detailsDesc">
                    {this.gatherRoles(
                      this.props.title.Participants,
                      'Screenplay'
                    )}
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="detailsTitle">Starring:</span>
                  <span className="detailsDesc">
                    {this.gatherRoles(this.props.title.Participants, 'Actor')}
                  </span>
                </li>
              </ul>
            ) : null}{' '}
          </div>
        </div>
      </div>
    )
  }
}

export default Card
