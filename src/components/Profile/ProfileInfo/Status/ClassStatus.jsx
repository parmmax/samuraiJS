import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

class ClassStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status,
   }

   activateEditMode = () => {
      this.setState({
         editMode: true,
      })
   }

   deactivateEditMode = () => {
      this.setState({
         editMode: false,
      })
      this.props.updateStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value,
      })
   }

   componentDidUpdate (prevProps, prevState, snapshot) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render () {
      // console.log('render');
      return (
         <div>
            <InputGroup size='sm'
                        className="font-italic justify-content-center">
               {
                  this.state.editMode
                     ? <FormControl
                        placeholder="Enter your status"
                        aria-describedby="status-addon"
                        className="rounded-sm"
                        onBlur={this.deactivateEditMode}
                        autoFocus={true}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                     />
                     : <div onDoubleClick={this.activateEditMode}
                              className='text-info rounded-sm p-auto w-100'
                     >
                        {
                           this.props.status
                              ? this.props.status
                              : 'No status yet'
                        }
                     </div>
               }
            </InputGroup>

               {
                  !this.state.editMode
                  ? <small className="text-muted">Double click to change status</small>
                  : <small className="text-info">Click somewhere to update status</small>
               }

         </div>
      )
   }
}

export default ClassStatus