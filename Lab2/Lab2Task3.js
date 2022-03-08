var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    for (let i=0;i<library.length;i++){

          console.log("Name of " +(i+1)+" author: "+library[i].author);
          console.log("Title of book " +(i+1)+" is: "+library[i].title);
          console.log("Reading status of book " +(i+1)+" is: "+library[i].readingStatus);
          console.log("***************************************");
    
    }