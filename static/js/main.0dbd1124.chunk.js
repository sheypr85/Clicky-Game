(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports=[{id:1,name:"Roger",image:"https://upload.wikimedia.org/wikipedia/en/1/1c/Roger_Smith.png",clicked:!1},{id:2,name:"Stan Smith",image:"https://upload.wikimedia.org/wikipedia/en/6/63/Stan_Smith.png",clicked:!1},{id:3,name:"Steve",image:"https://upload.wikimedia.org/wikipedia/en/b/bc/Steve_Smith.png",clicked:!1},{id:4,name:"Klaus",image:"https://upload.wikimedia.org/wikipedia/en/2/24/An_image_of_Klaus_Heissler_in_a_water_bowl.png",clicked:!1},{id:5,name:"Hayley",image:"https://upload.wikimedia.org/wikipedia/en/f/f0/Hayley_Smith.png",clicked:!1},{id:6,name:"Francine",image:"https://upload.wikimedia.org/wikipedia/en/d/da/Francine_Smith.png",clicked:!1},{id:7,name:"Louise",image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/b/b9/Louise_render.png/revision/latest?cb=20130113075349",clicked:!1},{id:8,name:"Linda",image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/b/b7/Lindab.png/revision/latest?cb=20130113071354",clicked:!1},{id:9,name:"Bob",image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/3/3e/Bobbelcher2.png/revision/latest?cb=20130114075133",clicked:!1},{id:10,name:"Tina",image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/6/6e/Tina_render.png/revision/latest?cb=20130113192209",clicked:!1},{id:11,name:"Hugo",image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/1/17/Hugo_Habercore.png/revision/latest?cb=20130305170235",clicked:!1},{id:12,name:"Calvin",image:"https://vignette.wikia.nocookie.net/bobsburgerpedia/images/7/7e/Mr._Fischoeder.png/revision/latest?cb=20130305161036",clicked:!1}]},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(3),r=a.n(c),o=(a(16),a(4)),s=a(5),d=a(8),l=a(6),m=a(9),u=a(1);a(17);var p=function(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-center"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky-Click"),n.a.createElement("ul",{className:"nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"score"}," Score: ",e.score)),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"topscore"}," Top Score: ",e.topScore))))};a(18);var g=function(e){return n.a.createElement("div",{className:"container"},e.children)};a(19);var k=function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.cardClick(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))},b=a(7),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={pictures:b,score:0,topScore:0,show:!1},a.resetCards=function(e){var t=e.map(function(e){return{id:e.id,image:e.image,name:e.name,clicked:!1}});return a.timeoutId&&clearTimeout(a.timeoutId),a.shuffleCards(t)},a.shuffleCards=function(e){return e.sort(function(){return Math.random()-.5})},a.correctPick=function(e){var t=a.state.score;t++;var i=Math.max(t,a.state.topScore);a.setState({pictures:a.shuffleCards(e),score:t,topScore:i})},a.wrongPick=function(e){a.setState({pictures:a.resetCards(e),score:0,show:!1}),a.timeoutId=setTimeout(function(){this.setState({show:!0})}.bind(Object(u.a)(Object(u.a)(a))),0),console.log(a.timeoutId)},a.cardClicked=function(e){var t=!1,i=a.state.pictures.map(function(a){return a.id===e&&(a.clicked||(a.clicked=!0,t=!0)),a});t?a.correctPick(i):a.wrongPick(i)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({pictures:this.shuffleCards(this.state.pictures)})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(p,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement(g,null,n.a.createElement("div",{className:"row"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.pictures.map(function(t){return n.a.createElement("div",{className:(e.state.show,"col-3"),key:t.id},n.a.createElement(k,{id:t.id,image:t.image,cardClick:e.cardClicked}))})))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.0dbd1124.chunk.js.map