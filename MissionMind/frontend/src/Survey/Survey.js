import React from "react";
import SubmissionForm from "../components/SubmissionForm"

class Survey extends React.Component {
  render() {
    return (
      <div>
        <br /><br />
        <h1>Daily Survey</h1>
        <br /><br />

        <SubmissionForm
          resetState={this.props.resetState}
          submission={this.props.submission}
        />

      </div>
    );
  }
}

export default Survey;