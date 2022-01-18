import router from 'next/router'
import React from 'react'

interface Props {
  total: number
}

function BascketTotal({ total }: Props) {
    return (
        <div className="border border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Sous total</p>
          {
              total ? <p>{total} €</p> : null
          }
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Coup total de votre séjour, hotels et shows</p>
        <div className="mt-6 bg-red-500">
          <button
            type='submit'
            className=" w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-700"
          >
            Confirmer
          </button>
        </div>
        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
          <p>
            ou{' '}
            <button
              type="button"
              onClick={() => { router.push('/') }}
              className="text-blue-900 font-medium hover:text-blue-700"
            >
              Retour aux hôtels<span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    )
}

export default BascketTotal
