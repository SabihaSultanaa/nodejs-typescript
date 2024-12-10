interface Announcement{
    name:string,
    message:string,
    day:string,
    time:string,
    duration:number
}


let announcement : Announcement={
    name:'Sabiha',
    message: "your classes will be held on",
     day:'wednesday',
     time:'8 A.M',
     duration: 3
    };

console.log(`${announcement.name} ${announcement.message} ${announcement.day} at ${announcement.time} for ${announcement.duration} months. `);