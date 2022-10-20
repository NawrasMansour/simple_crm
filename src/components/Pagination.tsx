import React  from 'react'
import { usePaginationContext } from '../contexts/pagination_context';



function Pagination() {
    const paginationState = usePaginationContext();
    //console.log(paginationState)
    const pages = new Array(paginationState.totalPages);

    Array.from({ length: paginationState.totalPages }).forEach((page,index) => {
          pages.push(index + 1)
        });
  return (
    <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between my-4 work-sans">
        <div className='p-1 flex items-center'>
            <p className="text-sm leading-5 text-blue-700">
                Showing
                <span className="font-medium p-1">{paginationState.first + 1}</span>
                to
                <span className="font-medium p-1">{paginationState.first + paginationState.filtered_users.length}</span>
                of
                <span className="font-medium p-1">{paginationState.users.length}</span>
                results
            </p>
            <div className='items-center ml-1'>
                <form className='col-span-3'>
                    <select name='countInPage'
                            id="countInPage"
                            value={paginationState.countInPage}
                            onChange={paginationState.changePage}
                            className='border-transparent capitalize text-base py-1 px-2 bg-gray-200'>
                    <option value="5" >5</option>
                    <option value="10" >10</option>
                    <option value="20" >20</option>
                    <option value="40" >40</option>
                    </select>
                </form>
            </div>
        </div>
        <div className='p-1'>
            <nav className="relative z-0 inline-flex shadow-sm">
                {paginationState.currentPage !== 1 &&
                    <div>
                        <button
                            onClick={paginationState.changePage}
                            value={paginationState.currentPage - 1}
                            name="currentPage"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150">

                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>

                    </div>
                }
                <div>
                    {pages.map( (page)=>{
                        return (
                            <button onClick={paginationState.changePage}
                                  key={page}
                                  value={page}
                                  name="currentPage"
                                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                {page}
                            </button>
                        )
                    })}
                </div>
                {paginationState.currentPage !== paginationState.totalPages &&
                    <button onClick={paginationState.changePage}
                            value={paginationState.currentPage + 1}
                            name="currentPage"
                            className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" >

                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                }
            </nav>
        </div>
    </div>
  )
}

export default Pagination