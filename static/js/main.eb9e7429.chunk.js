(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(30)},19:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),u=a.n(l),o=(a(19),a(7)),i=a(8),s=a(11),m=a(9),c=a(12),h=(a(20),a(10)),p=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).nameChange=function(e){return n.setState({name:e.target.value})},n.phoneChange=function(e){return n.setState({phone:e.target.value})},n.emailChange=function(e){return n.setState({email:e.target.value})},n.addressChange=function(e){return n.setState({address:e.target.value})},n.remarkChange=function(e){return n.setState({remark:e.target.value})},n.handleSubmit=function(e){n.setState({result:JSON.stringify({name:n.state.name,phone:n.state.phone,email:n.state.email,address:n.state.address,remark:n.state.remark})}),e.preventDefault()},n.state={result:"Isi form untuk generate QR Code"},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=this.nameChange,a=this.phoneChange,n=this.emailChange,l=this.addressChange,u=this.remarkChange,o=this.handleSubmit;return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:o},r.a.createElement("p",null,"Nama Lengkap : ",r.a.createElement("input",{type:"text",value:e.name,onChange:t,required:!0})),r.a.createElement("p",null,"Nomor Handphone : ",r.a.createElement("input",{type:"number",value:e.phone,onChange:a,required:!0})),r.a.createElement("p",null,"Email : ",r.a.createElement("input",{type:"email",value:e.email,onChange:n,required:!0})),r.a.createElement("p",null,"Alamat :",r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",value:e.address,onChange:l,required:!0})),r.a.createElement("p",null,"Pertanyaan / catatan untuk pembuat booth:",r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",value:e.remark,onChange:u})),r.a.createElement("input",{type:"submit",value:"Generate"})),r.a.createElement("p",null,"Hasil:"),r.a.createElement(h.QRCode,{bgColor:"#FFFFFF",fgColor:"#000000",level:"Q",style:{width:256},value:e.result}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.eb9e7429.chunk.js.map