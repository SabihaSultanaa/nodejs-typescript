let current_users:string[]=['SaBiHa','SamiA','maRiA','Nazia'];
let new_users:string[]=['wajiha','safia','SABIHA','samia','kiran'];
new_users.forEach(newUsers=>{
    let lowerCase:string= newUsers.toLowerCase();
if(current_users.map(c_user=>c_user.toLowerCase()).includes(lowerCase))
{console.log(`The username ${newUsers} is not available. Please write a different username.`);}
else{console.log(`The username ${newUsers} is available.`);}
});