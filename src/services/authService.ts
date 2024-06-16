

import './../Interfaces/loginParams';

const loginRequest = async(loginParams : loginParams,store:any,router:any) =>{
  try{
      let result = await store.login_Request(loginParams); 

      if(result.status === 422)
      {
          throw new Error(result);
      }
      if(!result.success)
      {
          throw new Error(result.error);
      }

      localStorage.setItem('token',result.data.token);
      router.push({path:'/dashboard'});
      return 'SuccessFully Login';
  }catch(err:any){
    console.error(err);
    return err;
  }
}

const changeType = (passwordType:string, iconType:string) =>
  {
    passwordType = (passwordType=== 'password') ? 'text' : 'password';
    iconType = (passwordType === 'password') ? 'pi pi-eye cursor-pointer': 'pi pi-eye-slash cursor-pointer';

    return {
      'passwordType':passwordType,
      'iconType':iconType
    }
  }

export { loginRequest, changeType };
