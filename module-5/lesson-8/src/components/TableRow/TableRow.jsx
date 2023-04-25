import React from 'react'
import { Link } from 'react-router-dom'

export const TableRow = ( {item: {id, title, body,  }, deletePost}) => {
  return (
  
      <tr class="bg-white border-b  hover:bg-gray-50">
        <td class="px-6 py-4">{id}</td>
        <td class="px-6 py-4">{title}</td>
        <td class="px-6 py-4">TRUE</td>
        <td class="px-6 py-4 text-center">
          <Link to={`/main/posts/${id}`} className='bg-green-500 py-2 px-4 text-white text-center rounded-md'>Edit</Link>
        </td>
        <td><button onClick={() => {
          deletePost(id)
        }} className='bg-red-500 py-2 px-4 text-white text-center rounded-md'>DELETE</button></td>
      </tr>
  
  )
}
