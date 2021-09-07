import dataTypes from "../library/validation/type";

const Model = {
  firstName: {
    type: dataTypes.STRING,
    isRequired: true,
  },
  middleName: {
    type: dataTypes.STRING,
    isRequired: true,
  },
  lastName: {
    type: dataTypes.STRING,
    isRequired: false,
  },
  username: {
    type: dataTypes.STRING,
    isRequired: false,
    min: 8,
    max: 16,
  },
  password: {
    type: dataTypes.STRING,
    isRequired: true,
  },
  confirmPassword: {
    type: dataTypes.STRING,
    isRequired: true,
    compareWith: () => {
      console.log(this);
    },
  },
  dob: {
    type: dataTypes.DATE,
    isRequired: true,
  },
  gender: {
    type: dataTypes.ENUM,
    option: ["Male", "Female", "Other"],
    isRequired: false,
  },
  email: {
    type: dataTypes.EMAIL,
    isRequired: false,
  },
  phone: {
    type: dataTypes.PHONE,
    isRequired: false,
  },
  status: {
    type: dataTypes.ENUM,
    option: ["active", "inactive"],
    isRequired: false,
    default: "active",
  },
};

export default Model;
