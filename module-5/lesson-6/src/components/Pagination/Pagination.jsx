import React from 'react'
import ReactPaginate from 'react-paginate';

export const Pagination = ({pages, setPage}) => {
    
  return (
   <ReactPaginate pageCount={pages} onPageChange={(data) => {
    setPage(data.selected + 1 )
    // console.log(data.selected);
   }} className='pagination justify-content-center gap-2' activeLinkClassName='text-light' activeClassName='bg-primary' pageClassName='page-item p-2' pageLinkClassName='page-limk text-decoration-none' previousClassName='bg-primary p-2' nextClassName='p-2 bg-primary' nextLinkClassName='text-light text-decoration-none' previousLinkClassName='text-light p-2 text-decoration-none'/>
  )
}
