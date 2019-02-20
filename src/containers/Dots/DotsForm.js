import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { dotOptions } from '../../configs';

class DotsForm extends React.Component {
  constructor(props) {
    super(props);
    const { oldDot } = this.props;
    // console.log('old dot', oldDot);
    if(oldDot) {
      this.state = {
        dot: oldDot.dot,
        cost: oldDot.cost,
        date: oldDot.date,
        tag: oldDot.tag
      };
    }else {
      this.state = {
        dot: '',
        cost: '',
        date: '',
        tag: ''
      }
    }
  }

  render() {
    const initialStates = {
      dot: this.state.dot,
      cost: this.state.cost,
      date: this.state.date,
      tag: this.state.tag
    };
    const handleSubmit = (values, { setSubmitting }) => {
        console.log('values: ', values, this.props);
        this.props.formSubmit && this.props.formSubmit(values);
        setSubmitting(false);
    };
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const submitData = {
    //     dot: this.state.dot,
    //     cost: this.state.cost,
    //     date: this.state.date,
    //     tag: this.state.tag
    //   };
    //   console.log('values: ', submitData);
    //   this.props.formSubmit && this.props.formSubmit(submitData);
    // };
    return (
      <Formik initialValues={initialStates}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          dot: Yup.string().max(100).required(),
          cost: Yup.string().matches(
            /^\d+(\.\d{1,2})?$/,
            'Cost must be at most 2 decimal places'
          ).required(),
          date: Yup.string().required(),
          tag: Yup.string().required()
        })}>
        {
          props => {
            const {
              setFieldValue,
              touched,
              errors,
              values,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="dot">Dot</label>
                  <input id="dot" 
                    type="text"
                    name="dot"
                    onChange={(e) => {
                      setFieldValue('dot', e.target.value);
                      this.setState({
                        dot: e.target.value
                      });
                    }}
                    value={values.dot} />
                  { errors.dot && touched.dot && <p>{ errors.dot }</p> }
                </div>
                <div>
                  <label htmlFor="cost">Cost</label>
                  <input id="cost" 
                    type="text"
                    name="cost"
                    onChange={(e) => {
                      setFieldValue('cost', e.target.value);
                      this.setState({
                        cost: e.target.value
                      });
                    }}
                    value={values.cost} />
                  { errors.cost && touched.cost && <p>{ errors.cost }</p> }
                </div>
                <div>
                  <label htmlFor="date">Date</label>
                  <input id="date" 
                    type="date"
                    name="date"
                    onChange={(e) => {
                      setFieldValue('date', e.target.value);
                      this.setState({
                        date: e.target.value
                      });
                    }}
                    value={values.date} />
                  { errors.date && touched.date && <p>{ errors.date }</p> }
                </div>
                <div>
                  <label htmlFor="tag">tag</label>
                  <select id="tag"
                    name="tag"
                    onChange={(e) => {
                      setFieldValue('tag', e.target.value);
                      this.setState({
                        tag: e.target.value
                      });
                    }}
                    value={values.tag}>
                    {
                      dotOptions.map(option => (
                        <option
                          key={`${option.value}-${option.name}`}
                          value={option.value}>
                          {option.name}
                        </option>
                      ))
                    }
                  </select>
                  { errors.tag && touched.tag && <p>{ errors.tag }</p> }
                </div>
                <button type="submit">
                  Submit
                </button>
              </form>
            );
          }
        }
      </Formik>
    );
  }
}

export default DotsForm;
