import React, { Component } from "react";
import { Table } from "reactstrap";
import SubmissionModal from "./SubmissionModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class SubmissionList extends Component {
  render() {
    const submissions = this.props.submissions;
    return (
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
            <th>Spirit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!submissions || submissions.length <= 0 ? (
            <tr>
              <td colSpan="9" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            submissions.map(submission => (
              <tr key={submission.pk}>
                <td>{submission.name}</td>
                <td>{submission.date}</td>
                <td>{submission.stress}</td>
                <td>{submission.anxiety}</td>
                <td>{submission.sleep}</td>
                <td>{submission.homesickness}</td>
                <td>{submission.satisfaction}</td>
                <td>{submission.spirit}</td>
                <td align="center">
                  <SubmissionModal
                    create={false}
                    submission={submission}
                    resetState={this.props.resetState}
                  />
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
    );
  }
}

export default SubmissionList;