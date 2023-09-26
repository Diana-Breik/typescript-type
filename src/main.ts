type Student ={
    firstName: string
    lastName: string
    age:number
    grades: (Note | undefined)[]
}
// type Note= 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
type Note ={
   // subject:string
    grade: 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' // oder hier | undefined
}




const anton1: Student ={
    firstName:"Anton",
    lastName:"Meier",
    age:17,
    grades:[{ grade:"A"},{grade:2},{grade:"F"},{grade:3},{grade:1},{grade:"B"},{grade:2},{grade:5}]
}
function printInformationAboutAStudent(student : Student){
    console.log(student.firstName + " " + student.lastName + " (" +student.age + ")")
   console.log("=========================================")
    console.log("Noten: " + student.grades.map((element)=>{return element? element.grade : "*"}).join(","))
}
printInformationAboutAStudent(anton1)

//////////
const anton2: Student ={
    firstName:"Anton",
    lastName:"Meier",
    age:17,
    grades:[{ grade:"A"},{grade:2},undefined,{grade:3},{grade:1},{grade:"B"},undefined,{grade:5}]
}
printInformationAboutAStudent(anton2)

console.log("**********************************+")
type Course={
    students: Student[]
}
function printAllStudentsInCourse(course:Course){
    for(let i= 0;i<course.students.length;i++){
        printInformationAboutAStudent(course.students[i])
    }
}
const english: Course={students:[anton1,anton2]}
printAllStudentsInCourse(english)