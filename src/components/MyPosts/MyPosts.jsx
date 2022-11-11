import React from 'react';
import s from './MyPosts.module.css';
import { Form, Field } from 'react-final-form'
import { Button, Input, TextArea } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import {addNewPostAC} from './../../redux/profileReducer'


const MyPosts = (props) => {

  let pagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const addNewPost = (values) => {
    props.addNewPostAC(values.title, values.postBody);
  }

  return (
    <div>
      <div className={s.posts}>
        <div className={s.myPosts}>My posts</div>
        <div className={s.pagesNumberBox}>
          {
            pagesArr.map(pA => {
              return (
                <span onClick={() => { props.onPageChanged(pA) }}
                  className={props.currentPage === pA ? s.activePage : undefined}
                >
                  {pA}
                </span>
              )
            })
          }
        </div>
        <MyPostsForm addNewPost={addNewPost}/>
        {props.postsEl}
      </div>
    </div>
  );
};




const MyPostsForm = (props) => {

  const required = value => (value ? undefined : 'Required');
  const minFieldLength = min => value => value.length >= min ? undefined : 'Too short'
  const composeValidators = (...validators) => {
      return (value) => (
          validators.reduce((error, validator) => error || validator(value), undefined)
      )
  }

  return (
      <Form
          onSubmit={(values) => {
              props.addNewPost(values)
          }}
          render={renderProps => {
              const { handleSubmit } = renderProps;
              return (
                  <form onSubmit={handleSubmit} className={s.formLogin}>
                      <Field
                          name='title'
                          type='text'
                          placeholder='title'
                          validate={composeValidators(required, minFieldLength(5))}
                          component={TextArea}
                      />
                      <Field
                          name='postBody'
                          type='text'
                          validate={composeValidators(required, minFieldLength(5))}
                          placeholder='postBody'
                          component={TextArea}
                      />
                      <Button type='submit'>Post</Button>
                  </form>
              )
          }}
      >
      </Form>
  )
}


export default connect(null, {addNewPostAC}) (MyPosts)