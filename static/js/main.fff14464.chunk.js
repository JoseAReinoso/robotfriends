(this.webpackJsonprobotfrieds=this.webpackJsonprobotfrieds||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),s=r.n(c),o=r(7),a=r.n(o),i=(r(13),r(14),r(2)),h=r(3),l=r(5),j=r(4),b=function(e){var t=e.id,r=e.name,c=e.email,s=e.username;return Object(n.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow",children:[Object(n.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:r}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("p",{children:s})]})]})},d=function(e){var t=e.robots,r=t.map((function(e,r){return Object(n.jsx)(b,{id:t[r].id,name:t[r].name,email:t[r].email,username:t[r].username},r)}));return Object(n.jsxs)("div",{children:[r,console.log(r)]})},u=function(e){var t=e.searchChange;return Object(n.jsx)("div",{className:"pa2",children:Object(n.jsx)("input",{className:"tc bg-light-blue dib br3 pa3 ma2 grow",type:"search",placeholder:"search robots",onChange:t})})},O=(r(15),function(e){return Object(n.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})}),f=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(h.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Ooops. page contains an error"}):this.props.children}}]),r}(c.Component),p=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(i.a)(this,r),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,r=e.searchfield,c=t.filter((function(e){return e.name.toLocaleLowerCase().includes(r.toLocaleLowerCase())}));return 0===t.length?Object(n.jsx)("h2",{children:Object(n.jsx)("strong",{children:"Loading...."})}):Object(n.jsxs)("div",{className:"h1 tc",children:[Object(n.jsx)("h1",{children:"Robot friends"}),Object(n.jsx)(u,{searchChange:this.onSearchChange}),Object(n.jsx)(O,{children:Object(n.jsx)(f,{children:Object(n.jsx)(d,{robots:c})})})]})}}]),r}(c.Component);a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fff14464.chunk.js.map