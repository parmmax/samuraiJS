import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: 'To edit status, Double click me',
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
                        aria-describedby="basic-addon"
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}
                        autoFocus={true}
                     />
                     : <small onDoubleClick={this.activateEditMode}
                              className="">{this.state.status}</small>
               }

               {/*<InputGroup.Append>*/}
               {/*   <Button className="" variant="outline-primary">Button</Button>*/}
               {/*</InputGroup.Append>*/}
            </InputGroup>
         </div>
      )
   }
}

export default ProfileStatus