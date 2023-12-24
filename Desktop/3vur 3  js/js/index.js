var contener=document.querySelector(".contener")
const array=[
    {
     img:"heci.png",
     tittle:"google",
     text:"text",
     date:"02.02.2002"
    },
    {
        img:"heci.png",
        tittle:"google",
        text:"text",
        date:"02.02.2002"
       },
       {
        img:"heci.png",
        tittle:"google",
        text:"text",
        date:"02.02.2002"
       },   
       {
        img:"heci.png",
        tittle:"google",
        text:"text",
        date:"02.02.2002"
       },
       {
        img:"heci.png",
        tittle:"google",
        text:"text",
        date:"02.02.2002"
       },
       {
        img:"heci.png",
        tittle:"google",
        text:"text",
        date:"02.02.2002"
       },
       {
        img:"heci.png",
        tittle:"google",
        text:"text",
        date:"02.02.2002"
       },
       {
        img:"heci.png",
        tittle:"google",
        text:"text",
        date:"02.02.2002"
       },
       {
        img:"heci.png",
        tittle:"google",
        text:"text",
        date:"02.02.2002"
       },
               
]


array.forEach(element=>{
    const  div=document.createElement("div")
    div.classList.add("item")
    
    const  img=document.createElement("img")
    img.src=element.img;
    div.appendChild(img);

    const  tittle=document.createElement("tittle")
    tittle.textContent=element.tittle;
    div.appendChild(tittle);

    const  text=document.createElement("text")
    text.textContent=element.text;
    div.appendChild(text);

    const  date=document.createElement("date")
    date.textContent=element.date;
    div.appendChild(date);

    contener.appendChild(div)
})