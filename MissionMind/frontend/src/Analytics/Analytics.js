import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Table } from "reactstrap";
import Survey from "../Survey/Survey";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class SubmissionList extends Component {
  render() {
    const submissions = this.props.submissions;
    return (
      <div>
        <Table dark>
          <thead>
            <tr>

              <th>Name</th>
              <th>Date</th>
              <th>Stress</th>
              <th>Anxiety</th>
              <th>Sleep</th>
              <th>Homesickness</th>
              <th>Satisfaction</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!submissions || submissions.length <= 0 ? (
              <tr>
                <td colSpan="6" align="center">
                  <b>Ops, nothing here yet</b>
                </td>
              </tr>
            ) : (
              submissions.map(submission => (
                <tr key={submission.pk}>
                  <td>{submission.name}</td>
                  <td>{submission.date}</td>
                  <td>{submission.question1}</td>
                  <td>{submission.question2}</td>
                  <td>{submission.question3}</td>
                  <td>{submission.question4}</td>
                  <td>{submission.question5}</td>
                  <td align="center">

                    &nbsp;&nbsp;
                    <ConfirmRemovalModal
                      pk={submission.pk}
                      resetState={this.props.resetState}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <br />
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SubmissionList;

// function Analytics() {
//   return (
//     <>
//       <div>
//         <h1>Work in progress...</h1>
//       </div>
      
//     </>
//   );
// }

// export default Analytics;
