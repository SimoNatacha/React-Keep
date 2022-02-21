import axios from "axios";
import toastr from 'toastr';
const API_URL = "http://localhost:8080/keep/";


toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  rtl: true,
  onclick: null,
  showDuration: '3000',
  hideDuration: '2000',
  timeOut: '7000',
  extendedTimeOut: '4000',
  preventDuplicates: true,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
};

export const isEmptyOrNull = (value) => {
  if (
    value === "" ||
    value === null ||
    value === undefined ||
    value === "undefined"
  ) {
    return true;
  }
  return false;
};



export const toastSuccess = (msg, titleMsg, timeout = null) => {
  if (!isEmptyOrNull(timeout)) {
      toastr.options.timeOut = timeout;
  }
  return toastr.success(`${msg || 'Success'}`, `${titleMsg || 'Success'}`);
};
export const toastError = (msg, titleMsg, timeout = null) => {
  if (!isEmptyOrNull(timeout)) {
      toastr.options.timeOut = timeout;
  }
  return toastr.error(`${msg || 'Error'}`, `${titleMsg || 'Error'}`);
};
export const toastWarning = (msg, titleMsg, timeout = null) => {
  if (!isEmptyOrNull(timeout)) {
      toastr.options.timeOut = timeout;
  }
  return toastr.warning(`${msg || 'Warning'}`, `${titleMsg || 'Warning'}`);
};
export const toastInfo = (msg, titleMsg, timeout = null) => {
  if (!isEmptyOrNull(timeout)) {
      toastr.options.timeOut = timeout;
  }
  return toastr.info(`${msg || 'Info'}`, `${titleMsg || 'Info'}`);
};

export const request = async (url, method, data) => {
  let header = { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    
  

  };

  let result = null;

  const api = axios.create({
    baseURL: API_URL,
    headers:header,
    responseType: "json",
  });

  if (result != null) {
    return result;
  }
  // if (token) {
  //   header = {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json; multipart/form-data",
  //   };
  // }

  if (method.toLowerCase() === "get") {
    return await api.get(url).catch((err) => {
      result = err.response;
      console.log(err.message, err.response);
      console.log(err, err.response);
    });
  }

  if (method.toLowerCase() === "post") {
    console.log("post");
    
    return await api.post(url, data).catch((err)=>{
      result = err.response;
      console.log(err.message, err.response);
      console.log(err, err.response);
    });
  }

  if (method.toLowerCase() === "put") {
    await api.put(url, data).catch((err) => {
      result = err.response;
      console.log(err.message, err.response);
    });
  }

  if (method.toLowerCase() === "delete") {
    await api
      .delete(url, data)
      .then((res) => {
        result = res;
      })
      .catch((err) => {
        result = err.response;
        console.log(err.message, err.response);

        console.log(err, err.response);
      });
  }
};
