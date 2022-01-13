import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HotelList from "./HotelList";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";

registerLocale("fr", fr);

function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="mt-12 sm:mt-0 bg-red-500 flex justify-center ">
      <div className="md:grid  m-16">
        <div className="mt-5 md:mt-0 md:col-span-2  ">
          <form action="#" method="POST">
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
                    <DatePicker
                      locale="fr"
                      dateFormat="dd/MM/yyyy"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      selected={startDate}
                      onChange={(date: Date) => setStartDate(date)}
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date d&apos;arrivée
                    </label>
                    <DatePicker
                      locale="fr"
                      dateFormat="dd/MM/yyyy"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      selected={endDate}
                      onChange={(date: Date) => setEndDate(date)}
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
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Réserver
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
