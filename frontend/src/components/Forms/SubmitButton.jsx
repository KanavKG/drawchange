import React from 'react';
import { Button } from 'reactstrap';
import styles from '../../styles/Form.module.css';

const SubmitButton = props => (
  <Button className={styles.button} type="submit" {...props}>
    Submit
  </Button>
);

export default SubmitButton;
