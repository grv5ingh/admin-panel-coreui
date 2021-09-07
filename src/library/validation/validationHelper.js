export const validate = (Model, values) => {
  let error = {};
  let valid = true;
  //Perform validation operations
  Object.getOwnPropertyNames(Model).forEach(function (val, idx, array) {
    const elem = Model[val];
    if (val in values && elem.isRequired) {
      if (!["array", "object"].includes(elem.type)) {
        let errObj = checkValueType(elem, values[val]);
        error[val] = errObj;
        valid = false;
      }
    }
  });

  //End validation operation
  return { valid, error };
};
export const valid = (errorObject, field) => {
  return field in errorObject ? errorObject[field].error : false;
};

export const printMessage = (errorObject, field) => {
  return field in errorObject ? errorObject[field].message : false;
};

function checkValueType(item, value) {
  switch (item.type) {
    case "string":
      return isNaN(value) && value.length > 0 ? { error : false}: null;
    case "number":
      return !isNaN(value);
    case "email":
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    case "enum":
      return item.options.includes(value);
    case "date":
      let d = new Date(value);
      return d.getTime() !== d.getTime();
    case "date-time":
      let dt = new Date(value);
      return dt.getTime() !== dt.getTime();
    case "phone":
      return !isNaN(value) && value.length > 10 ? true : false;
    default:
      return false;
  }
}
