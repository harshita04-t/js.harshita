# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html 
)


# Solution code

## project 1

```javascript

console.log("Harshita")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
});

//by if else
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function(button){
  // console.log(button);
  button.addEventListener('click', function(e){
    // console.log(e);
    // console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    else{
      console.log("color is not defined")
    }
  })
});

//by switch case

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function(button){
  // console.log(button);
  button.addEventListener('click', function(e){
    // console.log(e);
    // console.log(e.target);
    switch(e.target.id){
      case 'grey':
      body.style.backgroundColor= e.target.id
      break;
    
    case 'white':
    body.style.backgroundColor= e.target.id
    break;
  case 'blue':
  body.style.backgroundColor= e.target.id
  break;
case 'yellow':
body.style.backgroundColor= e.target.id
break;
default :
 console.log("background color is not defined");
}
  })
});
```
## project 2 solution

```Javascript
const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt( document.querySelector('#height').value)
form.addEventListener('submit', function(e){
  e.preventDefault() // to stopping form to be submitted in server
  const height = parseInt( document.querySelector('#height').value)
  const weight = parseInt( document.querySelector('#weight').value)
  const results =document.querySelector('#results')


  if( height === ''|| height < 0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;
  } else if( weight === ''|| weight < 0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`;
  }else{
    const BMI = (weight/ ((height*height)/1000)).toFixed(2)
    //show the result
    results.innerHTML = `<span> ${BMI}</span>`;
    
  }
});
```
