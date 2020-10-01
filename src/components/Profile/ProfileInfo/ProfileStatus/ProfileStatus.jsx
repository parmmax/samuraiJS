import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

class ProfileStatus extends React.Component {

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

   render () {
      return (
         <div>
            <InputGroup size={'sm'}
                        className="text-info font-italic justify-content-center">
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
                              className='text-primary rounded-sm p-auto w-100'
                     >
                        {
                           this.props.status
                              ? this.props.status
                              : 'No status yet'
                        }
                     </div>
               }
               {/*<InputGroup.Append>*/}
               {/*   <Button className="" variant="outline-primary">Button</Button>*/}
               {/*</InputGroup.Append>*/}
            </InputGroup>
            <small className="text-note">
               {
                  !this.state.editMode
                  ? 'Double click to change status'
                  : 'Click somewhere to update status'
               }
               </small>
         </div>
      )
   }
}

export default ProfileStatus