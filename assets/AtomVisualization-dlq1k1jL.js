import{j as s,C as a,r as c,u}from"./react-three-fiber-6hqJt_B5.js";import"./three-BcfMKC7s.js";function e({radius:t,speed:n}){const r=c.useRef();return u(o=>{const i=o.clock.getElapsedTime()*n;r.current.position.set(t*Math.cos(i),t*Math.sin(i),0)}),s.jsxs("mesh",{ref:r,children:[s.jsx("sphereGeometry",{args:[.1,16,16]}),s.jsx("meshStandardMaterial",{color:"blue"})]})}function h(){return s.jsxs("mesh",{children:[s.jsx("sphereGeometry",{args:[.3,32,32]}),s.jsx("meshStandardMaterial",{color:"red"})]})}function l(){return s.jsxs(a,{style:{height:"100vh",width:"100%"},children:[s.jsx("ambientLight",{intensity:.5}),s.jsx("pointLight",{position:[10,10,10]}),s.jsx(h,{}),s.jsx(e,{radius:1,speed:1}),s.jsx(e,{radius:1.5,speed:.7}),s.jsx(e,{radius:2,speed:1.2})]})}export{l as default};
