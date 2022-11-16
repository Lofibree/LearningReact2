import React from 'react';
import s from './MyPosts.module.css';
import { Form, Field } from 'react-final-form'
import { Button, Input, TextArea } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import {addNewPostAC} from './../../redux/profileReducer'
import { required, minFieldLength, composeValidators } from '../Utils/Validators/validators';
import { CreateField } from '../common/FormsControls/FormsControls';


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
  return (
      <Form
          onSubmit={(values) => {
              props.addNewPost(values)
          }}
          render={renderProps => {
              const { handleSubmit } = renderProps;
              return (
                  <form onSubmit={handleSubmit} className={s.formLogin}>
                      {CreateField('title', 'text', 'title', composeValidators(required, minFieldLength(5)), TextArea)}
                      {CreateField('postBody', 'text', 'postBody', composeValidators(required, minFieldLength(5)), TextArea)}
                      <Button type='submit'>Post</Button>
                  </form>
              )
          }}
      >
      </Form>
  )
}


export default connect(null, {addNewPostAC}) (MyPosts)