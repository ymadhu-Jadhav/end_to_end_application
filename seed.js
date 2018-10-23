const db = require('./server/db')
const User = db.models.user
const Student = db.models.student
const Campus = db.models.campus

const users = [
    {firstName: 'Jasmine',
    lastName: 'J',
    email: 'jasmine@j.com'},

    {firstName: 'Joleene',
    lastName: 'M',
    email: 'joleene@m.com'},

    {firstName: 'Jennifer',
    lastName: 'K',
    email: 'jennifer@k.com',
    isAdmin: true,
    password: '123'}
]


const campuses = [
  {campusName: 'Great_Learning_Academy', 
  imageUrl: '/images/campusImage.png',
  },

  {campusName: 'Quick_Learn_Academy', 
  imageUrl: '/images/campusImage.png',
  },

  {campusName: 'Tech_Learning_Academy', 
  imageUrl: '/images/campusImage.png',
  },

  {campusName: 'TechCampus', 
  imageUrl: '/images/campusImage.png',
  },

  {campusName: 'County_Academy', 
  imageUrl: '/images/campusImage.png',
  }
]


const students = [
    {firstName: 'Alex',
     lastName: 'Smith',
    email: 'alex.smith@k.com',
    gpa: 2.5,
    campusId: 1
  },

    {firstName: 'Junji',
    lastName: 'Cassa',
    email: 'junji.cassa@k.com',
    gpa: 3.6,
    campusId: 2
  },

    {firstName: 'Pat',
    lastName: 'Ramy',
    email: 'pat.ramy@k.com',
    gpa: 4.2,
    campusId: 3
  },

    {firstName: 'Eunji',
    lastName: 'Ken',
    email: 'eun.ken@k.com',
    gpa: 2.3,
    campusId: 3},

    {firstName: 'Roxi',
    lastName: 'M',
    email: 'rox.m@k.com',
    gpa: 1.3,
    campusId: 2},

    {firstName: 'Sarah',
    lastName: 'Jose',
    email: 'sarah.j@k.com',
    gpa: 1.3,
    campusId: 2},

    {firstName: 'Ella',
    lastName: 'Bon',
    email: 'ella.b@k.com',
    gpa: 3.3,
    campusId: 1},

    {firstName: 'Lindsay',
    lastName: 'S',
    email: 'lind.s@k.com',
    gpa: 2.5,
    campusId: 1},

    {firstName: 'Joy',
    lastName: 'Kira',
    email: 'joy.kira@k.com',
    gpa: 3.5,
    campusId: 4},

    {firstName: 'Tom',
    lastName: 'Deffy',
    email: 'tom.d@k.com',
    gpa: 3.1,
    campusId: 5},

    {firstName: 'Goerge',
    lastName: 'Smith',
    email: 'george.smith@k.com',
    gpa: 2.3,
    campusId: 4},

    {firstName: 'Andy',
    lastName: 'C',
    email: 'andy.c@k.com',
    gpa: 3.3,
    campusId: 5},

    {firstName: 'Michael',
    lastName: 'Dsilva',
    email: 'mic.d@k.com',
    gpa: 0.3,
    campusId: 4}
]



// const campuses = [
//   {campusName: 'Great_Learning_Academy', 
//   imageUrl: '/images/campusImage.png',
//   },

//   {campusName: 'Quick_Learn_Academy', 
//   imageUrl: '/images/campusImage.png',
//   },

//   {campusName: 'Tech_Learning_Academy', 
//   imageUrl: '/images/campusImage.png',
//   },

//   {campusName: 'TechCampus', 
//   imageUrl: '/images/campusImage.png',
//   },

//   {campusName: 'County_Academy', 
//   imageUrl: '/images/campusImage.png',
//   }
// ]
// const students = [
//   {firstName: 'Alex',
//    lastName: 'Smith',
//   email: 'alex.smith@k.com',
//   gpa: 2.5,
//   campusId: 'Great_Learning_Academy'
// },

//   {firstName: 'Junji',
//   lastName: 'Cassa',
//   email: 'junji.cassa@k.com',
//   gpa: 3.6,
//   campusId: 'Great_Learning_Academy'
// },

//   {firstName: 'Pat',
//   lastName: 'Ramy',
//   email: 'pat.ramy@k.com',
//   gpa: 4.2,
//   campusId: 'Quick_Learn_Academy'
// },

//   {firstName: 'Eunji',
//   lastName: 'Ken',
//   email: 'eun.ken@k.com',
//   gpa: 2.3,
//   campusId: 'Tech_Learning_Academy'},

//   {firstName: 'Roxi',
//   lastName: 'M',
//   email: 'rox.m@k.com',
//   gpa: 1.3,
//   campusId: 'Tech_Learning_Academy'},

//   {firstName: 'Sarah',
//   lastName: 'Jose',
//   email: 'sarah.j@k.com',
//   gpa: 1.3,
//   campusId: 'County_Academy'},

//   {firstName: 'Ella',
//   lastName: 'Bon',
//   email: 'ella.b@k.com',
//   gpa: 3.3,
//   campusId: 'County_Academy'},

//   {firstName: 'Lindsay',
//   lastName: 'S',
//   email: 'lind.s@k.com',
//   gpa: 2.5,
//   campusId: 'County_Academy'},

//   {firstName: 'Joy',
//   lastName: 'Kira',
//   email: 'joy.kira@k.com',
//   gpa: 3.5,
//   campusId: 'County_Academy'},

//   {firstName: 'Tom',
//   lastName: 'Deffy',
//   email: 'tom.d@k.com',
//   gpa: 3.1,
//   campusId: 'County_Academy'},

//   {firstName: 'Goerge',
//   lastName: 'Smith',
//   email: 'george.smith@k.com',
//   gpa: 2.3,
//   campusId: 4},

//   {firstName: 'Andy',
//   lastName: 'C',
//   email: 'andy.c@k.com',
//   gpa: 3.3,
//   campusId: 'TechCampus'},

//   {firstName: 'Michael',
//   lastName: 'Dsilva',
//   email: 'mic.d@k.com',
//   gpa: 0.3,
//   campusId: 'TechCampus'}
// ]

const seed = () =>
  Promise.all(users.map(user => User.create(user)))
  .then(() =>
    Promise.all(campuses.map(campus => Campus.create(campus)))
  )
  .then(() =>
    Promise.all(students.map(student => Student.create(student)))
  )
  

const main = () => {
  console.log('Syncing the db');
  db.sync({ force: true })
  .then(() => {
    console.log('Seeding the db');
    return seed();
  })
  .catch(err => {
    console.log('Error while seeding');
    console.log(err);
  })
  .then(() => {
    db.close();
    return null;
  });
};
main();