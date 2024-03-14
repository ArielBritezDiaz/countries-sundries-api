const o=await fetch("http://localhost:3000/v1/auth/google/login",{method:"GET",headers:{"x-api-version":"1","Content-Type":"application/json"}});console.log("response",o);
