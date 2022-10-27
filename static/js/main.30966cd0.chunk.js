(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(4),s=i.n(a),c=(i(11),i(12),i(1)),n=(i(13),i(14),i(0)),l=function(e){var t=e.movie;return Object(n.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("figure",{className:"image is-4by3",children:Object(n.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsxs)("div",{className:"media",children:[Object(n.jsx)("div",{className:"media-left",children:Object(n.jsx)("figure",{className:"image is-48x48",children:Object(n.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(n.jsx)("div",{className:"media-content",children:Object(n.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(n.jsxs)("div",{className:"content",children:[t.description,Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},r=function(e){var t=e.movies;return Object(n.jsx)("div",{className:"movies",children:t.map((function(e){return Object(n.jsx)(l,{movie:e},e.imdbId)}))})},o=i(2),m=i(5),d=i.n(m);var j=function(e){var t=e.name,i=e.value,a=e.label,s=void 0===a?t:a,l=e.required,r=void 0!==l&&l,m=e.onChange,j=void 0===m?function(){}:m,b=Object(c.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),h=Object(o.a)(b,1)[0],u=Object(c.useState)(!1),g=Object(o.a)(u,2),p=g[0],O=g[1],v=p&&r&&!i;return Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{className:"label",htmlFor:h,children:s}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("input",{id:h,"data-cy":"movie-".concat(t),className:d()("input",{"is-danger":v}),type:"text",placeholder:"Enter ".concat(s),value:i,onChange:function(e){return j(e.target.value)},onBlur:function(){return O(!0)}})}),v&&Object(n.jsx)("p",{className:"help is-danger",children:"".concat(s," is required")})]})},b=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,1)[0];return Object(n.jsxs)("form",{className:"NewMovie",children:[Object(n.jsx)("h2",{className:"title",children:"Add a movie"}),Object(n.jsx)(j,{name:"title",label:"Title",value:"",onChange:function(){},required:!0}),Object(n.jsx)(j,{name:"description",label:"Description",value:""}),Object(n.jsx)(j,{name:"imgUrl",label:"Image URL",value:""}),Object(n.jsx)(j,{name:"imdbUrl",label:"Imdb URL",value:""}),Object(n.jsx)(j,{name:"imdbId",label:"Imdb ID",value:""}),Object(n.jsx)("div",{className:"field is-grouped",children:Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",children:"Add"})})})]},t)},h=i(6),u=function(){return Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)("div",{className:"page-content",children:Object(n.jsx)(r,{movies:h})}),Object(n.jsx)("div",{className:"sidebar",children:Object(n.jsx)(b,{})})]})};s.a.render(Object(n.jsx)(u,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.30966cd0.chunk.js.map