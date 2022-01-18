import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { object, number, date, array } from 'yup';
import { Formik, Form } from "formik";
import ErrorMessageComponent from './ErrorMessageComponent'
import HotelList from "./HotelList";
import { useDispatch, useSelector } from 'react-redux'
import { setScheduleEndDate, setScheduleStartDate } from "../../store/scheduleSlice";
import { setStep } from "../../store/stepSlice";
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import getYesterdayDate from "../../utils/getYesterdayDate";
import Hostel from "../../interfaces/Hostel";

registerLocale("fr", fr);

interface Booking {
  startDate: Date,
  endDate: Date,
  hostelList: Hostel[]
}

function Booking() {
  const dispatch = useDispatch();
  const hostelList = useSelector((state: { hostel: {value: Hostel[]}} ) => state.hostel.value)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()
  const validationSchema = object({
    startDate: date()
    .min(getYesterdayDate(new Date()), 'Veuillez sélectionner une date de début valide')
    .required('Veuillez sélectionner une date de début'),
    endDate: date()
    .when(
      'startDate',
      (startDate, schema) => (
        startDate && schema.min(startDate, 'Vous devez sélectionnez une date antérieur à la date de début')
      ),
    ).required('Veuillez sélectionner une date de fin'),
    hostelList: array()
    .of(
      object().shape({
        id: number().required() 
      })
    ).min(1, 'Vous devez selectionner au moins 1 hotel')
  });

  const onSubmit = async (values: any) => {
    await validationSchema.validate(
      {...values, hostelList},
      { strict: true })
      .then(() => {
        router.push('/shows')
      })
      .catch(function(err) {
        setErrorMessage(err.toString());
      });
  };

  const { control, handleSubmit } = useForm();
  
  return (
    <Formik
      initialValues={{}}
      onSubmit={() => {}}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
      {
        errorMessage.length > 0 ? <ErrorMessageComponent  message = {errorMessage}/> : null
      }
          <div className="shadow overflow-hidden sm:rounded-md">
               <div className="px-4 py-5 bg-white sm:p-6 align-items ">
                 <div className="grid grid-cols-6 gap-6 space-x-0  justify-between">
                   <div className="col-span-2 sm:col-span-2 ">
                     <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date de départ
                    </label>       
                    <Controller  
                      name="startDate"
                      control={control}
                      render = {({field})  => (
                        <DatePicker
                        locale="fr"
                        dateFormat="dd/MM/yyyy"
                        className="mt-1 border-2 border-blue-900 focus:ring-blue-700 focus:border-blue-700 block w-full shadow-sm sm:text-sm rounded-md"
                        selected={field.value}
                        name="startDate"
                        onChange={(date: Date) => {
                          field.onChange(date)
                          dispatch(setScheduleStartDate(date.toISOString()))
                        } }
                      />
                        )}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2 ">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date d&apos;arrivée
                    </label>
                    <Controller  
                      name="endDate"
                      control={control}
                      render = { ({field})  => (
                        <DatePicker
                        locale="fr"
                        dateFormat="dd/MM/yyyy"
                        className="mt-1 border-2 border-blue-900 focus:ring-blue-700 focus:border-blue-700 block w-full shadow-sm sm:text-sm rounded-md"
                        selected={  field.value }
                        name="endDate"
                        onChange={(date: Date) => {
                          field.onChange(date)
                          dispatch(setScheduleEndDate(date.toISOString()))
                        } }
                      />
                      )}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-right mt-3">
                    <button
                    type="submit"
                    className="items-end  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Réserver
                    </button>
                  </div>
                  <div className="col-span-12 ">
                    <HotelList />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

              </div>
            </div>
      </Form>
    </Formik>
  );
}

export default Booking;
