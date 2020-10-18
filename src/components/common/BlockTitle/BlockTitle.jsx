import React from 'react'

class BlockTitle extends React.Component {
   constructor (props) {
      super(props)
      this.state = {
         myPost: 'my post',
         aboutMe: 'about me',
         settings: 'settings',
         projects: 'projects',
         messages: 'messages',
         friends: 'friends',
         title: '',
      }
   }

   render () {
      const { titleText } = this.state
      return (
         <header className="text-center mb-3">
            <h4 className="font-family-secondary font-weight-bold">
               {titleText}
            </h4>
         </header>
      )
   }
}
