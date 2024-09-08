export default class dio {
    async postRequest (username,password) {

        try{

            const response = await fetch('http://192.168.43.28:8000/api/user/login',{
                method:'POST',
            headers:{
                'Content-Type':'application/json',
                
            },
            body:JSON.stringify( {
                user_name: username,  
                password: password,
            })
        })
        const data = await response.json();
        return data;
    }
    catch(e){
        return e;  
    }

    }
}

  // const login = async ()=>{
  //   usedispace(addToCart())
  // console.log('function is called')
  // try {
  //   const response = await fetch('http://192.168.43.28:8000/api/user/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user_name: username,  // Match the API field names exactly
  //       password: password,
  //     }),
  //   });
  //   const data = await response.json();
  //  console.log(data)
  // } catch (error) {
  //  console.log(error)
  // }
// }