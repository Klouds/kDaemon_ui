webpackJsonp([0,2],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}n(1);var r=n(6),a=o(r),i=n(158),u=o(i),c=n(159),l=o(c);u["default"].render(a["default"].createElement(l["default"],null),document.getElementById("app"))},1:function(e,t){},159:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),l=o(c),s=n(160),f=o(s),d=n(161),p=o(d),b=n(164),y=o(b),m=n(165),h=o(m),v=n(176),_=o(v),k=n(215),w=o(k),O=n(216),g=o(O),j=n(217),C=o(j),E=n(218),P=o(E),S=n(219),M=o(S),N=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={nav:"nodes",mode:"show",mock_applications:[{name:"ghost_blog",docker_image:"ghost",exposed_ports:["2368"],dependencies:[],is_enabled:!0},{name:"codiad",docker_image:"quantumobject/docker-codiad",exposed_ports:["80"],dependencies:[],is_enabled:!0}],mock_nodes:[{name:"ghost_blog",docker_image:"ghost",exposed_ports:["2368"],dependencies:[],is_enabled:!0},{name:"codiad",docker_image:"quantumobject/docker-codiad",exposed_ports:["80"],dependencies:[],is_enabled:!0}],mock_containers:[{name:"ghost_blog",docker_image:"ghost",exposed_ports:["2368"],dependencies:[],is_enabled:!0},{name:"codiad",docker_image:"quantumobject/docker-codiad",exposed_ports:["80"],dependencies:[],is_enabled:!0}],currentStore:_["default"]},n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.loadApplicationsIntoStore(),this.loadNodesIntoStore(),this.loadContainersIntoStore()}},{key:"loadApplicationsIntoStore",value:function(){this.state.mock_applications.map(function(e){w["default"].create(e)})}},{key:"loadNodesIntoStore",value:function(){this.state.mock_nodes.map(function(e){C["default"].create(e)})}},{key:"loadContainersIntoStore",value:function(){this.state.mock_containers.map(function(e){M["default"].create(e)})}},{key:"render",value:function(){var e=this.getStoreValue(this.state.nav);return l["default"].createElement("div",{className:"mainDiv"},l["default"].createElement(f["default"],{onNodesClick:this.changeNav.bind(this,"nodes"),onAppsClick:this.changeNav.bind(this,"applications"),onContainersClick:this.changeNav.bind(this,"containers")}),"show"===this.state.mode?l["default"].createElement(h["default"],{stores:[this.state.currentStore],inject:{value:function(){return[e]}}},l["default"].createElement(p["default"],{nav:this.state.nav,mode:this.state.mode,itemClick:this.itemClicked})):"",l["default"].createElement(y["default"],null))}},{key:"getStoreValue",value:function(e){return"containers"===e?P["default"].getState().containers:"nodes"===e?g["default"].getState().nodes:"applications"===e?_["default"].getState().applications:void 0}},{key:"selectAppropriateStore",value:function(e){var t=void 0;"containers"===e?t=P["default"]:"nodes"===e?t=g["default"]:"applications"===e&&(t=_["default"]),this.setState(t)}},{key:"changeNav",value:function(e){this.setState({nav:e}),this.selectAppropriateStore(e)}},{key:"itemClicked",value:function(e){console.log(e.name)}}]),t}(l["default"].Component);t["default"]=N},160:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),l=o(c),s=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e)),o=n.props;o.onNodesClick,o.onAppsClick,o.onContainersClick;return n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.renderNavBar();return l["default"].createElement("div",{className:"navBar"},e)}},{key:"renderNavBar",value:function(){return l["default"].createElement("div",null,l["default"].createElement("div",{className:"navBar-logo"}),l["default"].createElement("button",{className:"navbar-element",onClick:this.props.onNodesClick}," Nodes "),l["default"].createElement("button",{className:"navbar-element",onClick:this.props.onAppsClick}," Applications "),l["default"].createElement("button",{className:"navbar-element",onClick:this.props.onContainersClick}," Containers "))}}]),t}(l["default"].Component);t["default"]=s},161:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),l=o(c),s=n(162),f=o(s),d=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e)),o=n.props;o.nav,o.mode,o.value,o.itemClick;return n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.renderListComponent();return l["default"].createElement("div",{className:"listComponent"},e)}},{key:"renderListComponent",value:function(){var e=this.props.value,t=[],n=void 0;for(n in e)e.hasOwnProperty(n)&&(t=t.concat(e[n]));return l["default"].createElement("div",null,l["default"].createElement("h1",{className:"header"}," List of ",this.props.nav," "),l["default"].createElement(f["default"],{items:t,itemClick:this.props.itemClick}))}}]),t}(l["default"].Component);t["default"]=d},162:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),l=o(c),s=n(163),f=o(s),d=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e)),o=n.props;o.items,o.itemClick;return n}return i(t,e),u(t,[{key:"render",value:function(){var e=this;return l["default"].createElement("ul",{className:"list"},this.props.items.map(function(t){return l["default"].createElement(f["default"],{key:t.id,item:t,itemClick:e.props.itemClick})}))}}]),t}(l["default"].Component);t["default"]=d},163:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),l=o(c),s=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e)),o=n.props;o.item,o.itemClick;return n}return i(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("li",{className:"list-item",onClick:this.props.itemClick.bind(this,this.props.item)},this.props.item.name)}}]),t}(l["default"].Component);t["default"]=s},164:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),l=o(c),s=function(e){function t(){return r(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.renderViewComponent();return l["default"].createElement("div",{className:"viewComponent"},e)}},{key:"renderViewComponent",value:function(){return l["default"].createElement("h1",{className:"header"}," View Window ")}}]),t}(l["default"].Component);t["default"]=s},176:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(177),u=o(i),c=n(191),l=o(c),s=n(215),f=o(s),d=function(){function e(){r(this,e),this.bindActions(f["default"]),this.applications=[]}return a(e,[{key:"create",value:function(e){var t=this.applications;return e.id=l["default"].v4()||e.id,e.name=e.name||"",e.docker_image=e.docker_image||"",e.exposed_ports=e.exposed_ports||[],e.dependencies=e.dependencies||[],e.is_enabled=e.is_enabled||!1,this.setState({applications:t.concat(e)}),e}},{key:"update",value:function(){}},{key:"delete",value:function(){}}]),e}();t["default"]=u["default"].createStore(d,"ApplicationsStore")},177:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(178),a=o(r),i=new a["default"];t["default"]=i},215:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(177),a=o(r);t["default"]=a["default"].generateActions("create","update","delete")},216:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(177),u=o(i),c=n(217),l=o(c),s=function(){function e(){r(this,e),this.bindActions(l["default"]),this.nodes=[]}return a(e,[{key:"create",value:function(){}},{key:"update",value:function(){}},{key:"delete",value:function(){}}]),e}();t["default"]=u["default"].createStore(s,"NodesStore")},217:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(177),a=o(r);t["default"]=a["default"].generateActions("create","update","delete")},218:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(177),u=o(i),c=n(219),l=o(c),s=function(){function e(){r(this,e),this.bindActions(l["default"]),this.containers=[]}return a(e,[{key:"create",value:function(){}},{key:"update",value:function(){}},{key:"delete",value:function(){}}]),e}();t["default"]=u["default"].createStore(s,"ContainersStore")},219:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(177),a=o(r);t["default"]=a["default"].generateActions("create","update","delete")}});