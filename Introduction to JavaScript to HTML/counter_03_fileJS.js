document.addEventListener('DOMContentLoaded',function()
{
    document.querySelector('button').onclick=counter_plus;
});
let counter=0;
function counter_plus()
{
    counter++;
    document.querySelector('#txt_counter').innerHTML=counter;
    if(counter%10===0)
        alert(`Counter is ${counter}`);
}