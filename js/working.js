const getTextarea = document.getElementById('main-textarea');
//Make Bold
document.getElementById('bold-btn').addEventListener('click', function () {
    getTextarea.style.fontWeight = '900'

})
//Make Italic 
document.getElementById('italic-btn').addEventListener('click' , function(){
    getTextarea.style.fontStyle = 'italic' ; 
})
//Make Under Line 
document.getElementById('underline-btn').addEventListener('click' , function(){
    getTextarea.style.textDecoration = 'underline' ; 
})


//Make Font Size Changer 
document.getElementById('font-size').addEventListener('input' , function(){
    const fontSizeValue = document.getElementById('font-size') ; 
    // fontSizeValue.value = 16 ; 
    const fontSizeText = fontSizeValue.value ;
    const withPx = fontSizeText+'px' ;  
    getTextarea.style.fontSize = withPx ; 
});  

document.getElementById('align-left').addEventListener('click' , function(){
    getTextarea.style.textAlign = 'left' ; 
})
document.getElementById('align-center').addEventListener('click' , function(){
    getTextarea.style.textAlign = 'center' ; 
})
document.getElementById('align-right').addEventListener('click' , function(){
    getTextarea.style.textAlign = 'right' ; 
})
document.getElementById('align-justify').addEventListener('click' , function(){
    getTextarea.style.textAlign = 'justify' ; 
}) ; 
document.getElementById('upper-case').addEventListener('click' , function(){
    getTextarea.style.textTransform = 'uppercase';
}) ; 

//Color part 
document.getElementById('color-input').addEventListener('input' , function(){
    const myColor = document.getElementById('color-input') ; 
    const setColor = myColor.value ; 
    getTextarea.style.color = setColor ; 
})