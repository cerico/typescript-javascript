import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import { connect } from 'react-redux'
import Drawers from  'colour-drawers'

const Component = props => (
  <div id="colours">
    <Drawers info={props.blacks} />
    <Drawers info={props.blues} />   
  </div>
)

const mapStateToProps = state => ({
  blacks: state.blacks,
  blues: state.blues,
})

Component.propTypes = {
  blacks: PropTypes.object.isRequired,
  blues: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
)(Component)
