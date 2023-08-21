/* eslint-disable react/prop-types */
import React from 'react';
import { PageStyle } from './styles/PageStyle';
// eslint-disable-next-line no-unused-vars
import BeforePage from '../Components/BeforePage';
import { QuestionDetailContainer } from './styles/QuestionDetailContainer';
import { Button } from '../Components/Button';
import Like from '../Components/Like';

export default function QuestionDetail({ question }) {
  // const [question, setQuestion] = useState({});
  // useEffect(() => setQuestion(props.question), [props]);
  return (
    <PageStyle>
      <BeforePage></BeforePage>
      <QuestionDetailContainer>
        <div className="title">{question.title}</div>
        <div className="author-container">
          <div className="author">{question.author}</div>
          <div className="author-right-container">
            <div className="my-text">
              <div>
                <img src="/images/mdi-pen.png" alt=""></img>
              </div>
              <div>
                <img src="/images/mdi-trash.png" alt=""></img>
              </div>
            </div>
            <div className="time">{question.createdAt}</div>
          </div>
        </div>
        <div className="content">{question.content}</div>

        <div className="bottom-menu">
          <div className="icon-count">
            <div>
              <div>
                <img src="/images/message.png" alt=""></img>
              </div>
              <div>{question.comments.length}</div>
            </div>
            <Like
              likes_count={question.likes_count}
              questionId={question.questionId}
              user_has_liked={question.user_has_liked}
            ></Like>
          </div>
        </div>

        <div className="title">{question.answers.length} Answer</div>
        {question.answers.map((answer) => {
          return (
            <div className="answer-container" key={answer.answerId}>
              <div className="author-container">
                <div className="author">{answer.author}</div>
                <div className="author-right-container">
                  <div className="my-text">
                    <div>edit</div>
                    <div>delete</div>
                  </div>
                  <div className="time">{answer.createdAt}</div>
                </div>
              </div>
              <div className="content">{answer.content}</div>
              <div className="bottom-menu">
                <div className="icon-count">
                  <div>
                    <div>
                      <img src="/images/message.png" alt=""></img>
                    </div>
                    <div>{answer.comments.length}</div>
                  </div>
                  <Like
                    type="answer" // "question" or "answer"
                    likes_count={answer.likes_count}
                    questionId={question.questionId}
                    answerId={answer.answerId} // or answerId
                    user_has_liked={answer.user_has_liked}
                  ></Like>
                </div>
              </div>
            </div>
          );
        })}
        <div className="new-answer-container">
          <div className="title">Your Answer</div>
          <textarea className="answer-input" type="text"></textarea>
          <div className="submit-container">
            <Button primary>Submit</Button>
          </div>
        </div>
      </QuestionDetailContainer>
    </PageStyle>
  );
}
