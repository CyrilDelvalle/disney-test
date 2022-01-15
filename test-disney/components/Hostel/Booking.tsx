import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { object, number, date, array } from 'yup';
import { Formik, Form } from "formik";
import ErrorMessageComponent from '../ErrorMessageComponent'
import HotelList from "../HotelList";
import { useDispatch, useSelector } from 'react-redux'
import { setScheduleEndDate, setScheduleStartDate } from "../../store/scheduleSlice";
import { setStep } from "../../store/stepSlice";
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import getYesterdayDate from "../../utils/getYesterdayDate";

registerLocale("fr", fr);

function Booking() {
  const dispatch = useDispatch();
  const hostelList = useSelector((state: any) => state.hostel.value)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    dispatch(setStep(1))
  }, [])

  const validationSchema = object({
    startDate: date()
    .min(getYesterdayDate(), 'Veuillez sélectionner une date de début valide')
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
      .then((value) => {
        console.log(value);
        
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
       <div className="mt-12 sm:mt-0 bg-red-500 flex justify-center ">
         <div className="m-16">
          <div className="shadow overflow-hidden sm:rounded-md">
               <div className="px-4 py-5 bg-white sm:p-6">
                 <div className="grid grid-cols-6 gap-6">
                   <div className="col-span-3 sm:col-span-3">
                     <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date de départ
                    </label>       
                    <Controller  
                      name="startDate"
                      control={control}
                      defaultValue={undefined}
                      render = { ({field})  => (
                        <DatePicker
                        locale="fr"
                        dateFormat="dd/MM/yyyy"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date d&apos;arrivée
                    </label>
                    <Controller  
                      name="endDate"
                      control={control}
                      defaultValue={undefined}
                      render = { ({field})  => (
                        <DatePicker
                        locale="fr"
                        dateFormat="dd/MM/yyyy"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        selected={field.value}
                        name="endDate"
                        onChange={(date: Date) => {
                          field.onChange(date)
                          dispatch(setScheduleEndDate(date.toISOString()))
                        } }
                      />
                      )}
                    />
                  </div>
                  <div className="col-span-12 ">
                    <HotelList />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Réserver
                </button>
                {
                  errorMessage.length > 0 ? <ErrorMessageComponent  message = {errorMessage}/> : null
                }
              </div>
            </div>
        </div>
      </div>
      </Form>
    </Formik>
  );
}

export default Booking;