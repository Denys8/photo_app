import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhotosAction } from "../../actions/photos";

import "./photos.scss";

class Photos extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
      <div className="page">
        <h2>Photos</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => {
      getPhotosAction(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
