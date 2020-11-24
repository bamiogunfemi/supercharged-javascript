import React, { useState, FC, ChangeEvent ,FormEvent } from "react";

interface userPropsType {
  displayName: string,
  email: string,
  message: string,
}
interface formProps{
  userCredentials: userPropsType,
}
const Feedback: FC<formProps> = ({ userCredentials }) => {
  const { displayName } = userCredentials;
  return (
    <article >
      <div className="form-header">
        <h1>Thanks for filling the form {displayName}, We've received Your Feedback!</h1>
      </div>
    </article>
  )
}


const Form = () => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    message: "",
  });
  const [showFeedback, setFeedback] = useState({
    showFeedbackComponent: false
  });
  const { email, displayName, message } = userCredentials;
  const { showFeedbackComponent } = showFeedback;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && displayName && message) {
      setFeedback({ showFeedbackComponent: true })
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement> |ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="form">
      {
        showFeedbackComponent ?
          <Feedback
            userCredentials={userCredentials}
          /> :
          <section >
            <div className="form-header">
              <h1>Hey There, We Are Collectng Feedback!</h1>
            </div>
            <div className="form-content">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="displayName">Name *</label>
                  <input
                    required
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}

                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}

                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Feedback *</label>
                  <textarea
                    name="message"
                    className="form-input"
                    value={message}
                    onChange={handleChange}
                    required
                    rows={10}
                  />
                </div>
                <div className="form-group">
                  <button type="submit"
                  >Submit Feedback</button>
                </div>
              </form>
            </div>
          </section >
      }
    </div>
  )
}

export default Form;
