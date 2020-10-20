import React, { useEffect, useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const HooksStatus = (props) => {

   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status) // при первой отрисовке статус взят из props
   }, [props.status]) // useEffect запускается каждый раз, когда изменен [props.status]
   // если приочередной отрисовке props.status изменинтся, то запускается useEffect
   // в [ ... ] записывается условие, при котором будет запускаться useEffect

   const activateEditMode = () => {
      setEditMode(true) // показываем поле ввода статуса
   }

   const deactivateEditMode = () => {
      setEditMode(false) // скрываем поле ввода статуса
      props.updateStatus(status) // обновляем статус. Отправляем введый символ(ы) по дереву наверх (ProfileInfo -> ... -> store)
   }

   const onStatusChange = (e) => {
      // изменяяем State при каждом вводе символа
      setStatus(e.currentTarget.value)
   }

   // componentDidUpdate (prevProps, prevState, snapshot) {
   //    if (prevProps.status !== this.props.status) {
   //       this.setState({
   //          status: this.props.status
   //       })
   //    }
   // }

   return (
      <div>
         <InputGroup size='sm' className="font-italic justify-content-center">
            {editMode ?
               <FormControl
                  placeholder="Enter your status"
                  // aria-describedby="status-addon"
                  className="rounded-sm"
                  onBlur={deactivateEditMode}
                  autoFocus={true}
                  value={status}
                  onChange={onStatusChange}
               />
               :
               <div onDoubleClick={activateEditMode}
                    className='text-info rounded-sm p-auto w-100'
               >
                  {props.status ? props.status : 'No status yet'}
               </div>
            }
         </InputGroup>

         {
            !editMode
               ? <small className="text-muted">Double click on status to change
                  them</small>
               : <small className="text-info">Click somewhere to update
                  status</small>
         }

      </div>
   )
}

export default HooksStatus