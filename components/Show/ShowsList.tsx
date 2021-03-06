import { useRouter } from 'next/router'
import React from 'react'
import shows from '../../api/shows.json'
import Show from '../../interfaces/Show'
import ShowItem from './ShowItem'

function ShowsList() {
  const router = useRouter()
    return (
  <>
      <div className="md:grid  m-4">
        <div className="mt-5 md:mt-0 md:col-span-2  "> 
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-t-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nom
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Horaire
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Prix
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shows.map((show: any ) => (
                    <ShowItem
                    key={show.id} 
                      show={show}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 px-4 py-3 bg-gray-50 sm:rounded-b-lg">
        <button
          onClick={() => router.push('/resume')}
          type="submit"
          className=" col-start-1 col-end-2  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continuer sans r??server
        </button>
        <button
          onClick={() => router.push('/resume')}
          type="submit"
          className=" col-end-8 col-span-2 inline-flex justify-center py-3 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continuer
        </button>
      </div>
        </div>
        </div>
      </>
    )
}

export default ShowsList
