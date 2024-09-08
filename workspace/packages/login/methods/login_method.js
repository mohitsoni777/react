import Dio from '../../../utils/dio'


export const login=async (username,password)=>{
const dio1 =  new Dio();
 const data = await  dio1.postRequest(username,password);
 console.log(data)
}