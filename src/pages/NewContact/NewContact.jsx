import './NewContact.scss';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from "react-router-dom";
import { contactValidationSchema } from '../../validation/validation';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/actions';

export default function NewContact(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contactStatuses = useSelector(state => state.contactStatuses)

  const initialValues = {
    id: uuidv4(),
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    favorite: '',
  }

  const handleSubmit = (value) =>{
    dispatch(addContact(value))
    navigate('/')
  }

  return(
    <div className="page-wrapper">
  <main className="shadow-lg bg-white container addPage">
    <Formik 
      initialValues={initialValues} 
      validationSchema={contactValidationSchema} 
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <h1 className="text-center form-title">New Contact</h1>
          
          <div className="row g-3">
            <div className='col-md-6'>
              <label className="form-label fw-bold" htmlFor="firstName">First name</label>
              <Field className='form-control custom-input' name='firstName' id='firstName' placeholder="e.g. Alex"/>
              <ErrorMessage name='firstName' component='div' className='text-danger error-msg'/>
            </div>

            <div className='col-md-6'>
              <label className="form-label fw-bold" htmlFor="lastName">Last name</label>
              <Field className='form-control custom-input' name='lastName' id='lastName' placeholder="e.g. Smith"/>
              <ErrorMessage name='lastName' component='div' className='text-danger error-msg'/>
            </div>

            <div className='col-md-6 mt-4'>
              <label className="form-label fw-bold" htmlFor="phone">Phone</label>
              <Field className='form-control custom-input' name='phone' id='phone' placeholder="+380..."/>
              <ErrorMessage name='phone' component='div' className='text-danger error-msg'/>
            </div>

            <div className='col-md-6 mt-4'>
              <label className="form-label fw-bold" htmlFor="email">Email</label>
              <Field className='form-control custom-input' type='email' name='email' id='email' placeholder="mail@example.com"/>
              <ErrorMessage name='email' component='div' className='text-danger error-msg'/>
            </div>

            <div className='col-md-6 mt-4'>
              <label className="form-label fw-bold" htmlFor="avatar">Avatar (0-99)</label>
              <Field className='form-control custom-input' type='number' name='avatar' id='avatar'/>
              <ErrorMessage name='avatar' component='div' className='text-danger error-msg'/>
            </div>

            <div className='col-md-6 mt-4'>
              <label className="form-label fw-bold" htmlFor="gender">Gender</label>
              <Field className='form-select custom-input' as='select' name='gender' id='gender'>
                <option value="">Choose...</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </Field>
              <ErrorMessage name='gender' component='div' className='text-danger error-msg'/>
            </div>

            <div className='col-12 mt-4'>
              <label className="form-label fw-bold" htmlFor="status">Status</label>
              <Field className='form-select custom-input' as='select' name='status' id='status'>
                <option value="">Select status</option>
                {Object.keys(contactStatuses).map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </Field>
              <ErrorMessage name='status' component='div' className='text-danger error-msg'/>
            </div>

            <div className='col-12 mt-4'>
              <div className="favorite-wrapper">
                <Field className='form-check-input mt-0' type='checkbox' name='favorite' id='favorite'/>
                <label className='form-check-label ms-3 fw-bold' htmlFor="favorite">
                  Add to Favorites ⭐
                </label>
              </div>
            </div>

            <div className="col-12 mt-5">
              <button 
                type='submit' 
                className='btn btn-primary btn-lg w-100 btn-save' 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save Contact'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </main>
</div>
  )
}