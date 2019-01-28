import React, { Component } from 'react';
import styles from '../../styles/AdminDash.module.css';
import ApplicantList from './ApplicantList';
import ApplicantInfo from './AppInfo';
import { Button, Input } from 'reactstrap';
import Filters from './Filters';
import dummyUsers from './mockUserData';

export default class AdminDash extends Component {
  constructor() {
    super();
    this.state = {
      selectedApplicantIndex: 0,
      showFilterModal: false
    };
  }
  onSelectApplicant = index => {
    this.setState({
      selectedApplicantIndex: index
    });
  };
  onShowFilterModal = () => {
    this.setState({
      showFilterModal: !this.state.showFilterModal
    });
  };
  render() {
    const { selectedApplicantIndex, showFilterModal } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles['page-header']}>Admin Dashboard</h1>
        <div className={styles.main}>
          <ApplicantList
            applicants={dummyUsers}
            selectApplicantCallback={this.onSelectApplicant}
            selectedIndex={selectedApplicantIndex}
          >
            <div class={styles['filter-container']}>
              <Input placeholder="Search by content" />
              <Button onClick={this.onShowFilterModal}>Filter</Button>
            </div>
          </ApplicantList>
          <div className={styles['applicant-info-container']}>
            <ApplicantInfo {...dummyUsers[selectedApplicantIndex]} />
          </div>
        </div>
        <Filters show={showFilterModal} toggleCallback={this.onShowFilterModal} />
      </div>
    );
  }
}