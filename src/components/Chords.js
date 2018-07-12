import React, { Component } from 'react'




export class Chords extends Component {
render () {
    let comments = this.state.chord.map(chords => {
      return <div
        key={chords.pk}
        name={chords.name}
        related_name={chords.related_name}
      >
      </div>
    })

    return (
      <Grid centered columns={2}>
      <Grid.Column>
        <Comment.Group>
          {comments}
          <CommentForm createComment={this.createComment} />
        </Comment.Group>
      </Grid.Column>
      </Grid>
    )
  }
}

