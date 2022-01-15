import React from 'react'
import Show from '../interfaces/Show'
import Image from 'next/image'
import { add, remove } from '../store/showSlice'
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    show: Show
  }
  
function ShowItem({ show }: Props ) {
    const dispatch = useDispatch();
    const showList = useSelector((state: any) => state.show.value)
    const { id, title, image, schedule, description, imageAlt } = show;
    const isSelected = showList.find((show: Show) => show.id === id)

    return (
        <tr key={id} onClick={() => {
            if(!isSelected) {
                dispatch(add(show))
            } else {
                dispatch(remove(show))
            }
        } }>
        <td className="px-6 py-4 whitespace-nowrap ">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={image} alt={imageAlt} />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{title}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{description}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">

        <div className="flex items-center">
          <div className="text-sm text-gray-900">{schedule}</div>
        </div>
        </td>
        <td className="whitespace-nowrap">
        <div >
            {
                showList.find((show: Show) => show.id === id) ?
                <Image  src={'/mickeyLogo.png'} width={25} height={20} />
                : null
            }
          </div>
        </td>
      </tr>
    )
}

export default ShowItem
