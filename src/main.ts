type Student ={
    firstName: string
    lastName: string
    age:number
    grades: Note[]
}
type Note ={
   // subject:string
    grade: 1 | 2 | 3 | 4 | 5 | 6
}

const anton: Student ={
    firstName:"Anton",
    lastName:"Meier",
    age:17,
    grades:[{ grade:1},{grade:4},{grade:3},{grade:1},{grade:3},{grade:2},{grade:1},{grade:2}]
}
function printInformationAboutAStudent(student : Student){
    console.log(student.firstName + " " + student.lastName + " (" +student.age + ")")
   console.log("=========================================")
    console.log("Noten: " + student.grades.map((element)=>{return element.grade}).join(","))
}
printInformationAboutAStudent(anton)
