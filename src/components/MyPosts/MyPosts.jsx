import React from 'react';
import s from './MyPosts.module.css';
import moment from 'moment';
import { AiOutlineSend } from 'react-icons/ai'
// import { Field, reduxForm } from 'redux-form';
// import { Form, Field } from 'react-final-form'
import {requiredField, maxLengthCreator} from './../../components/Utils/Validators/validators'
import { TextArea } from '../common/FormsControls/FormsControls';
import { Button } from '../common/FormsControls/FormsControls';


const MyPosts = (props) => {

  let pagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const addNewPost = (values) => {
    // debugger;
    props.addNewPostAC(values.newPostBody, values.newPostAuthor);
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
        {/* <AddNewPostForm onSubmit={addNewPost}/> */}
        {props.postsEl}
      </div>
    </div>
  );
};

// const maxLength10 = maxLengthCreator(10);

// const AddNewPostForm = (props) => {
//   return (
//     <Form>
//       {(handleSubmit) => (
//         <form onSubmit={handleSubmit}>
//           <div className={s.fieldBox}>
//             <Field component={TextArea} name={'newPostBody'} placeholder={'enter new post here'} validate={[requiredField, maxLength10]} />
//             <Field component={TextArea} name={'newPostAuthor'} placeholder={'enter your name here'} validate={[requiredField, maxLength10]} />
//             <Field component={Button}>Post</Field>
//           </div>
//         </form>
//       )}
//     </Form>
//   )
// }


// const AddNewPostFormRedux = reduxForm({form: 'addNewPost'}) (AddNewPostForm)


export default MyPosts;