import axios from './../../aixos';
import { defineStore } from 'pinia'
import './../../Interfaces/loginParams';

const AuthModule= defineStore('AuthModule',{
  
  actions:{

          login_Request(data:loginParams){
              return new Promise<void>((resolve,reject)=>{
                    axios.post('/api/auth/login',data).then((response:any)=>{
            
                        resolve(response.data);
                  }).catch(({response})=>{

                    if(response.status === 422){
                      reject(response.data.message);
                    }else{
                      reject(response.data);
                    }
                     
                  });
            });
        }
  }

});

export default AuthModule;