import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { dotOptions } from '../../configs';

class DotsFormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowError = this.handleShowError.bind(this);
    console.log('props ', props);
  }

  handleShowError(touched, error) {
    return touched && error && <p>{error}</p>;
  }

  render() {
    const { touched, errors, values, formSubmit } = this.props;

    return (
      <Form onSubmit={() => formSubmit(values)}>
        <div>
          <Field type="text" name="dot" placeholder="Dot(s)"/>
          { this.handleShowError(touched.dot, errors.dot) }
        </div>
        <div>
          <Field type="text" name="cost" placeholder="Cost"/>
          { this.handleShowError(touched.cost, errors.cost) }
        </div>
        <div>
          <Field type="text"
            name="tag"
            component="select"
            placeholder="Category tag">
            {
              dotOptions.map(
                option => <option key={option.value}
                  value={option.value}>
                  {option.name}
                </option>
              )
            }
          </Field>
          { this.handleShowError(touched.tag, errors.tag) }
        </div>
        <div>
          <Field type="date" name="date" />
          { this.handleShowError(touched.date, errors.date) }
        </div>
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

const DotsForm = withFormik({
  mapPropsToValues({ dot, cost, tag, date }){
    return {
      dot: dot || '',
      cost: cost || '',
      tag: tag || '',
      date: date || ''
    }
  },
  validationSchema: Yup.object().shape({
    dot: Yup.string().max(100).required(),
    cost: Yup.string()
            .matches(/^\d+(\.\d{1,2})?$/,
              'Cost must be at most 2 decmial places')
            .required(),
    tag: Yup.string().required(),
    date: Yup.date().required()
  }),
  // handleSubmit(values, { setSubmitting }) {
    // console.log( values);
  //   // return onSubmit(values);
    // setSubmitting(false);
  // }
})(DotsFormWrapper);

export default DotsForm;
