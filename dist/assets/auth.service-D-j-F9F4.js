import{d as o}from"./index-BPKYvsHV.js";const e=async a=>{try{return(await o.post("/signup",a)).data}catch(s){throw s.response.data}},n=async a=>{try{const s=new URLSearchParams;s.append("grant_type","password"),s.append("username",a.username),s.append("password",a.password);const r=await o.post("/login",s,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});return console.log(r),r.data}catch(s){throw console.log(s),s.response.data}},p=async a=>{},c=async a=>{try{return(await o.post("/forget_password",{email:a})).data}catch(s){throw s.response.data}},d=async(a,s)=>{try{return(await o.post("/reset_password",{password:a,token:s})).data}catch(r){throw r.response.data}};export{n as a,e as b,c as f,d as r,p as v};
