import React from 'react';
import s from './MyPosts.module.css';
import { Form } from 'react-final-form'
import { Button, TextArea } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { addNewPostAC } from './../../redux/profileReducer'
import { required, minFieldLength, composeValidators } from '../Utils/Validators/validators';
import { CreateField } from '../common/FormsControls/FormsControls';
import Paginator from '../common/Paginator/Paginator';


const MyPosts = (props) => {

  const addNewPost = (values) => {
    props.addNewPostAC(values.title, values.postBody);
  }

  return (
    <div>
      <div className={s.posts}>
        <div className={s.myPosts}>My posts</div>
        <Paginator onPageChanged={props.onPageChanged} pageSize={10} currentPage={props.currentPage}/>
        <MyPostsForm addNewPost={addNewPost} />
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


export default connect(null, { addNewPostAC })(MyPosts)