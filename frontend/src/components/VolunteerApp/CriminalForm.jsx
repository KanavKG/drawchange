import React from 'react';
import * as Yup from 'yup';

import { Form, FormField, Checkbox, NextButton, Header, Text } from '../Forms';

const validation = Yup.object().shape({
  sexual_violent: Yup.boolean(),
  drugs: Yup.boolean(),
  driving: Yup.boolean(),
  explanation: Yup.string().when(['sexual_violent', 'drugs', 'driving'], {
    is: (first, second, third) => first || second || third,
    then: Yup.string()
      .required('Required')
      .min(45, 'Please add more detail.')
  })
});

const defaultValues = {
  sexual_violent: false,
  drugs: false,
  driving: false,
  explanation: ''
};

const defaultOnSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const CriminalForm = props => {
  const initValues = props.initValues || defaultValues;
  const submitHandler = props.onSubmit || defaultOnSubmit;
  return (
    <Form initialValues={initValues} validationSchema={validation} onSubmit={submitHandler}>
      <Header>Criminal History</Header>
      <Text bold>Please indicate if you have been convicted of any of the following.</Text>
      <Checkbox
        name="sexual_violent"
        value="Any crime involving a sexual offense, an assault or the use of a weapon? "
      />
      <Checkbox
        name="drugs"
        value="Any crime involving the use, possession, or the furnishing of drugs or hypodermic syringes?"
      />
      <Checkbox
        name="driving"
        value="Reckless driving, operating a motor vehicle while under the influence, or driving to endanger?"
      />
      <FormField
        name="explanation"
        label="If you indicated yes to any of the above please explain and list when the offense occured."
      />
      <NextButton />
    </Form>
  );
};

export default CriminalForm;
