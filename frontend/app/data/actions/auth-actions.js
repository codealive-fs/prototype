"use server";

export async function RegisterUserAction(formData, FormData){
    console.log("Hi from use server");
    
    const fields = {
        username: formData.get("email"),
        password: formData.get("password"),
    };
    console.log(">>>>>>>>>>>>>>>");
    console.log(fields);
    console.log(">>>>>>>>>>>>>>>");
    // return user 
    // return true
    // return false
};