import React from 'react'
import Post from './Post/Post'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, minLengthCreator, required, } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

const MyPosts = (props) => {

   let postsElement = props.posts.map(p =>
      <Post key={p.id}
            id={p.id}
            post={p.post}
            date={p.date}
            likesCounts={p.likesCounts}
      />)

   const onSubmit = (values) => {
      props.addPost(values.addPostBody);
   }

   return (
      <section className="mb-3 p-4 rounded-sm w-100">
         <header className="text-center mb-3">
            <h3 className="font-family-secondary font-weight-bold border-bottom border-primary pb-2">my <span className="text-primary">P</span>osts</h3>
         </header>

         <article>
            <PostFormRedux onSubmit={onSubmit} />
         </article>
         <article>
            {postsElement}
         </article>
      </section>
   )
}

let maxLength200 = maxLengthCreator(200);
let minLength2 = minLengthCreator(2);

const PostForm = (props) => {
   return (
      <Form onSubmit={props.handleSubmit}
            className="d-flex flex-column align-items-end w-100">
         <Form.Group className="d-flex flex-column w-100">
            <Field component={Textarea}
                   type="textarea"
                   name="addPostBody"
                   placeholder="Enter new post"
                   className="mb-2 form-control"
                   validate={[required, maxLength200, minLength2]}
            />
         </Form.Group>
         <InputGroup.Append>
            <Button type="submit"
                    variant="outline-primary"
                    className=""
                    size="sm">Add post</Button>
         </InputGroup.Append>
      </Form>
   )
}

const PostFormRedux = reduxForm({
   form: 'postForm'
})(PostForm)

export default MyPosts