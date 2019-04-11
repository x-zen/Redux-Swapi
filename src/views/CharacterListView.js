import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getJedi } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount(props) {
    // call our action
    this.props.getJedi();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<h2>Please wait, jedi info incoming...</h2>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetchingJedi: state.charsReducer.isFetchingJedi
});

export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  { getJedi } /* action creators go here */
)(CharacterListView);
