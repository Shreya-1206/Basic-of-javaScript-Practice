const userIsSmiling = false;

userIsSmiling && console.log("Yes , the user is smiling 😃");
!userIsSmiling && console.log("No, the user is not smiling 🙁");


const dataDownloaded = 100;

let hasBeenDownloaded = dataDownloaded === 100;
// hasBeenDownloaded = hasBeenDownloaded &&  console.log('Data downloaded successfully');
hasBeenDownloaded &&= console.log('Data downloaded successfully 💯');
hasBeenDownloaded ||= console.log('Downloading ...');
console.log(hasBeenDownloaded);