const baseUrl = 'http://0.0.0.0:3000/api/user';
import {fetch as fetchPolyfill} from 'whatwg-fetch';

export const CreateUser = async (email, name, dob, hobbies, age, callback) => {

    let data = {};
    data.email = email;
    data.name = name;
    data.dob = dob;
    data.hobbies = hobbies;

    try{
        let res = await fetchPolyfill(`${baseUrl}/createUser`, {
          method: 'POST',
          body: data,
          headers: {
            "Content-Type": "application/json",
          }
        }).then(response => {
          resolve(response);
        }).catch(err => {
          reject(err);
        });

        if(res){
          callback(data);
        }
      }catch(err){
        console.log(err);
      }
};

export const GetUserByEmail = async (email, callback) => {

  let data = {};
  data.email = email;

  try{
    let res = await fetchPolyfill(`${baseUrl}/getUserByEmailID`, {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });
    if(res){
      callback(data);
    }
  }catch(err){
    console.log(err);
  }
};

export const GetUser = async (userID, callback) => {

  let data = {};

  data.id = userID;

  try{
    let res = await fetchPolyfill(`${baseUrl}/getUserById`, {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });

    if(res){
      callback(data);
    }
  }catch(err){
    console.log(err);
  }
};

export const UpdateUser = async (userId, data, callback) => {

  let obj = {};
  obj.id = userId;
  obj.data = data;

  try{
    let res = await fetchPolyfill(`${baseUrl}/createUser`, {
      method: 'POST',
      body: obj,
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });

    if(res){
      callback(data);
    }
  }catch(err){
    console.log(err);
  }
};

