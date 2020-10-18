import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CollapseNav } from './CollapseNav'

class CollapseNavContainer extends React.Component {
   render () {

      return (
         <CollapseNav
            {...this.props}
            dialogs={this.props.dialogs}
         />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      links: state.links,
   }
}



export default compose(
   connect( mapStateToProps, null ),
)(CollapseNavContainer)