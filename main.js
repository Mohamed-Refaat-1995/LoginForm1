var emailCheckLabel=document.getElementById('EmailCheck');

var passwordInput=document.getElementById('passwordId');
var passwordCheck=document.getElementById('passwordCheck');
var loginBtn=document.getElementById('loginBtn');




function checkEmail(e)
{
   if(e.target.value.includes('@'))
   {
        emailCheckLabel.className='text-danger d-none'
   }
   else if(e.target.value.includes('@')===false)
   {
    emailCheckLabel.className='text-danger';
   }
    
}
function checkPassword(e)
{
   if(e.target.value.length<=6)
   {
    passwordCheck.className='text-danger';
   }
   else if(e.target.value.length>6)
   {
    passwordCheck.className='text-danger d-none';
   }
    
}
