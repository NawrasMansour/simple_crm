import { faker } from '@faker-js/faker'
import axios from 'axios'
import { api_url } from './constants';

const config = {
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
	},
};


export const addUser = async (userData : {}) => {
  try {
      let response = await axios.post(api_url, userData , config );
      response.data = {
                        "status": "success",
                      }
      return response.data;
  } catch (error) {
    return {
            "status": "error",
          }
  }
}

export const updateUser = async (id :'' , userData : {}) => {
  try {
      let response = await axios.put(api_url+'/'+id, userData , config);
      response.data = {
                        "status": "success",
                      }
      return response.data;
  } catch (error) {
    return {
            "status": "error",
          }
  }
}

export const deleteUser = async (id :'') => {
  try {
      let response = await axios.delete(api_url+'/'+id , config);
      response.data = {
                        "status": "success",
                      }
      return response.data;
  } catch (error) {
    return {
            "status": "error",
          }
  }
}

export const createRandomUser = () => {
  return {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    first_name : faker.name.firstName(),
    last_name : faker.name.lastName(),
    avatar: faker.image.avatar(),
  };
}

export const getLocalStorage = () =>{
  let auth : any = localStorage.getItem('auth');
  return auth ? JSON.parse(auth) : {email: "" , isLoggedin : false};
}


export const calculatePagination = (items : [], countInPage : number ,pageNo : number) => {
   let currentPage = pageNo;
   const totalPages = Math.ceil(items.length / countInPage);

   if(currentPage > totalPages)
    currentPage = totalPages;

   const hasPreviousPage = currentPage === 1 ? false : true;
   const hasNextPage = currentPage === totalPages ? false : true;

   let first = (currentPage - 1) * countInPage
   let last = first + countInPage;
   let filteredItems = items.slice(first, last)

   let newState = {
      items: items,
      filteredItems: filteredItems,
      currentPage: currentPage,
      totalPages: totalPages,
      countInPage: countInPage,
      hasPreviousPage : hasPreviousPage,
      hasNextPage : hasNextPage,
      first : first,
   }
   return newState;
}


export const classNames =(...classes : any) => {
  return classes.filter(Boolean).join(' ')
}