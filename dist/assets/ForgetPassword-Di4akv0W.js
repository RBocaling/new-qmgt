import{r as a,u as c,j as e,a as m,B as r}from"./index-BPKYvsHV.js";import{f as u}from"./auth.service-D-j-F9F4.js";import{I as f}from"./index-DHrIblQl.js";import"./Compact-B4Af6ofP.js";import"./objectWithoutProperties-C75TBmNk.js";import"./ContextIsolator-DqsfBFLf.js";import"./button-KcHuXJc_.js";const v=()=>{const[i,n]=a.useState(""),[p,l]=a.useState(!1),d=c(),o=t=>{n(t.target.value)},x=async t=>{t.preventDefault(),l(!0);try{await u(i),r.success("Password reset link has been sent to your email."),d("/signin")}catch(s){console.error("Failed to send password reset:",s),r.error((s==null?void 0:s.detail)||"Failed to send password reset link. Please try again.")}finally{l(!1)}};return e.jsxs("div",{className:"relative w-full px-4 flex flex-col justify-between items-top mb-12",children:[e.jsx("div",{className:"flex justify-start items-start h-max",children:e.jsxs("div",{className:"flex flex-col gap-4 mb-7",children:[e.jsx("h1",{className:"text-5xl  md:text-7xl text-white font-medium",children:"Forgot Password"}),e.jsx("span",{className:"text-xl md:text-2xl text-white font-semibold tracking-wide",children:"Fear not"})]})}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 md:gap-24",children:[e.jsxs("div",{className:"w-full md:w-1/2 blur-bg border py-7 px-5 border-ash/20 rounded-md  flex flex-col items-center justify-center gap-7 relative z-20",children:[e.jsx("p",{className:"text-white",children:"Enter the email address associated with your account and we'll send you a link to reset your password"}),e.jsx(f,{type:"text",className:"bg-gray-200 text-base p-4 md:p-3 rounded-lg w-full",placeholder:"Email Address",onChange:t=>o(t)}),e.jsx("button",{onClick:x,className:" text-lg font-medium p-3 border  w-full bg-golden text-white rounded-lg",children:"Submit"}),e.jsxs("div",{className:"flex gap-2 items-center justify-center",children:[e.jsx("p",{className:"text-gray-500 flex justify-center",children:"Remember your password?"}),e.jsx(m,{to:"/signin",className:"text-golden",children:"Login"})]})]}),e.jsxs("div",{className:"w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start ",children:[e.jsx("h1",{className:"text-white text-5xl md:text-8xl font-medium font tracking-wide whitespace-nowrap",children:"Buy & Sell"}),e.jsx("p",{className:"text-xl  md:text-3xl font-normal text-white tracking-wide",children:"The Ultimate currency."}),e.jsx("h1",{className:"text-white text-3xl md:text-7xl font-mediu tracking-wide mt-12",children:"Get Mobile Wallet"}),e.jsx("p",{className:"text-xl  md:text-3xl font-normal text-white tracking-wide",children:"Status: Developing"}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-3 mt-3 w-full",children:[e.jsx("button",{className:"text-white text-base tracking-wider py-3 px-7 rounded-full border",children:"Google Play"}),e.jsx("button",{className:"text-white text-base tracking-wider py-3 px-7 rounded-full border",children:"Apple Apps"})]})]})]})]})};export{v as default};
