import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

class DotsFormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowError = this.handleShowError.bind(this);
  }

  handleShowError(touched, error) {
    return touched && error && <p>{error}</p>;
  }

  render() {
    const { touched, errors } = this.props;
    // console.log(values, errors, touched);
    return (
      <Form>
        <div>
          <Field type="text" name="dot" placeholder="Dot(s)"/>
          { this.handleShowError(touched.dot, errors.dot) }
        </div>
        <div>
          <Field type="text" name="cost" placeholder="Cost"/>
          { this.handleShowError(touched.cost, errors.cost) }
        </div>
        <div>
          <Field type="text" name="tag" component="select" placeholder="Category tag">
            <option value="option">Please select category tag</option>
            <option value="commute">Commute</option>
            <option value="bills">Electricity | Gas | Water Bill</option>
            <option value="loan">Home Loan</option>
            <option value="kid">Kid</option>
            <option value="eat">Live Goods</option>
            <option value="pocket">Pocket Money</option>
            <option value="strata">Strata</option>
            <option value="other">Other</option>
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
    dot: Yup.string().max(10).required(),
    cost: Yup.string().matches(/^\d+(\.\d{1,2})?$/, 'Cost must be at most 2 decmial places').required(),
    tag: Yup.string().required(),
    date: Yup.date().required()
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(DotsFormWrapper);

export default DotsForm;
