import { ErrorMessage, Field } from 'formik';
import React from 'react'
import Country from '../../interfaces/Country';
import countries from '../../api/countries.json'
import Hostel from '../../interfaces/Hostel';
import { useSelector } from 'react-redux';
import Show from '../../interfaces/Show';

function UserForm() {
  const hostelList = useSelector((state: { hostel: {value: Hostel[]}} ) => state.hostel.value)
  const showList = useSelector((state: { show: {value: Show[] }}) => state.show.value)
  
    return (
        <div className=" overflow-hidden rounded">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="md:mt-0 md:max-w-2xl col-span-6 sm:col-span-3">
            <div className=" bg-white">
                  <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        {
                          (hostelList.length && showList.length) ?
                          <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                              Prénom
                            </label>
                              <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <ErrorMessage
                                  name="firstName"
                                  component="small"
                                  className="text-red-400"
                              />                         
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                              Nom de famille
                            </label>
                              <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <ErrorMessage
                                name="lastName"
                                component="small"
                                className="text-red-400"
                              />
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Adresse mail
                              </label>
                                <Field
                                    type="text"
                                    id="mail"
                                    name="mail"
                                    className="form-control  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                                <ErrorMessage
                                    name="mail"
                                    component="small"
                                    className="text-red-400"
                                />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                              Pays
                            </label>
                            <Field as="select" name="country">
                            <option value="0">Sélectionnez un pays</option>
                            {
                                countries.map(({ id, name}: Country ) => {
                                  return <option key={id} value={id}>{name}</option>;
                                })
                              }
                            </Field>
                              <ErrorMessage
                                  name="country"
                                  component="small"
                                  className="text-red-400"
                              />
                          </div>
                          <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                              Rue
                            </label>
                                <Field
                                  type="text"
                                  id="street"
                                  name="street"
                                  className="form-control  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                                <ErrorMessage
                                    name="street"
                                    component="small"
                                    className="text-red-400"
                                />
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                              Ville
                            </label>
                              <Field
                                  type="text"
                                  id="city"
                                  name="city"
                                  className="form-control  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <ErrorMessage
                                  name="city"
                                  component="small"
                                  className="text-red-400"
                              />
                          </div>
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                              Code postal
                            </label>
                              <Field
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                className="form-control  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <ErrorMessage
                                name="zipCode"
                                component="small"
                                className="text-red-400"
                            />
                          </div>
                        </div> : <p>Votre panier doit contenir un hotel</p>
                        }

                      </div>    
                </div>

            </div>

      </div>
          </div>
      </div>
    )
}

export default UserForm
