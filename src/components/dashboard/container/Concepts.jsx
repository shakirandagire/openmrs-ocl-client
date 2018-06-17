import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchConcepts } from '../../../redux/actions/concepts/index';
import '../styles/index.css';

import SideBar from '../components/SideNavigation';
import ConceptList from '../components/ConceptList';

export class Concepts extends Component {
  static propTypes = {
    fetchConcepts: PropTypes.func.isRequired,
    concepts: PropTypes.arrayOf(PropTypes.shape({
      displayName: PropTypes.string,
    })).isRequired,
    isFetching: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { organisation, name } = this.props.match.params;
    this.props.fetchConcepts(organisation, name);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.fetchConcepts();
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        <SideBar />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="offset-sm-1 col-10">
              <ConceptList concepts={this.props.concepts} fetching={this.props.isFetching} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Concepts.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string, params: PropTypes.func }).isRequired,
};

export const mapStateToProps = state => ({
  concepts: state.concepts.concepts,
  isFetching: state.concepts.loading,
});


export default connect(
  mapStateToProps,
  { fetchConcepts },
)(Concepts);
