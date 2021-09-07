import dataTypes from "../library/validation/type";
const Client = {
    businessName:{
        type:dataTypes.STRING,
        isRequired:true,
    },
    password:{
        type:dataTypes.STRING,
        isRequired:true,

    },
    confirmPassword:{
        type:dataTypes.STRING,
        isRequired:true,
        compareWith:()=>{
            console.log(this)
        }
    },
    businessEmail:{
        type:dataTypes.EMAIL,
        isRequired:false,
    },
    businessPhone:{
        type:dataTypes.PHONE,
        isRequired:false,
    },
    status:{
        type:dataTypes.ENUM,
        option:["active", "inactive"],
        isRequired:false,
        default:"active"
    }

}
const clientObject = new Object(Client);

export default Client;