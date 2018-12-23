import React, { Component } from 'react';
import { Formik, Form } from 'formik';

import {Row, Col } from 'reactstrap';

import FormField from './FormField';
import Checkbox from './Checkbox';

import styles from '../styles/Form.module.css';


class VolunteerInfoForm extends Component {
  constructor(props) {
    super(props);
    this.initValues = {
      availability: {
        weekday_mornings: false,
        weekday_afternoons: false,
        weekday_evenings: false,
        weekend_mornings: false,
        weekend_afternoons: false,
        weekend_evenings: false
      },
      skills_interests: {
        admin_office: false,
        admin_virtual: false,
        atlanta_shelter: false,
        orlando_shelter: false,
        graphic_web_design: false,
        special_events: false,
        grant_writing: false,
        writing_editing: false,
        social_media: false,
        fundraising: false,
        finance: false,
        office_maintenance_housekeeping: false,
        international_projects: false,
        volunteer_coordination: false,
        outreach: false
      },
      languages: '',
      skills_qualifications: '',
      
    };
  }

  render() {
    return (
      <div>
        <h1>Volunteer Information</h1>
        <Formik
          initialValues={this.initValues}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <Form className={styles.form}>
              <h4 className={styles.subtitle}>Volunteer Availability</h4>
              <Row>
                <Col xs={6}>
                  <Checkbox name="availability.weekday_mornings" value="Weekday Mornings" />
                  <Checkbox name="availability.weekday_afternoons" value="Weekday Afternoons" />
                  <Checkbox name="availability.weekday_evenings" value="Weekday Evenings" />
                </Col>
                <Col xs={6}>
                  <Checkbox name="availability.weekend_mornings" value="Weekend Mornings" />
                  <Checkbox name="availability.weekend_afternoons" value="Weekend Afternoons" />
                  <Checkbox name="availability.weekend_evenings" value="Weekend Evenings" />
                </Col>
              </Row>
              <br/>
              <h4 className={styles.subtitle}>Skills & Interests</h4>
              <Row>
                <Col xs={6}>
                  <Checkbox name="skills_interests.admin_office" value="Administrative In Office Support" />
                  <Checkbox name="skills_interests.atlanta_shelter" value="Atlanta Shelter" />
                  <Checkbox name="skills_interests.graphic_web_design" value="Graphic/Web Design" />
                  <Checkbox name="skills_interests.special_events" value="Special Events (planning & execution)" />
                  <Checkbox name="skills_interests.writing_editing" value="General Writing & Editing" />
                  <Checkbox name="skills_interests.finance" value="Financing Assistance (Quickbooks)" />
                  <Checkbox name="skills_interests.outreach" value="Oureach - Sharing with others. Start today on social media!" />  
                </Col>
                <Col xs={6}>
                  <Checkbox name="skills_interests.admin_virtual" value="Administrative Virtual Support" />
                  <Checkbox name="skills_interests.orlando_shelter" value="Orlando Shelter" />
                  <Checkbox name="skills_interests.social_media" value="Social Media Assistance" />
                  <Checkbox name="skills_interests.fundraising" value="Fundraising (coordination & execution)" />
                  <Checkbox name="skills_interests.volunteer_coordination" value="Volutneer Coordination" />
                  <Checkbox name="skills_interests.office_maintenance_housekeeping" value="Office Maintenance & Housekeeping" />
                  <Checkbox name="skills_interests.international_projects" value="International Projects/Trips (planning & coordination)"/>
                </Col>
              </Row>
              <FormField name="languages" placeholder="Spanish, French" label="Please list any languages you speak, read, or write fluently (other than English.)"/>
              <FormField type="textarea" name="skills_qualifications" label="Please summarize special skills and qualifications you have acquired from employment, previous volunteer  work, or through other activities, including hobbies or sports."/>
              <button className={styles.button} type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default VolunteerInfoForm;
