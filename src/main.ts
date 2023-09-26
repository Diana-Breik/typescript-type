type Student ={
    firstName: string
    lastName: string
    age:number
    grades: Note[]
}
type Note ={
   // subject:string
    grade: 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
}




const anton: Student ={
    firstName:"Anton",
    lastName:"Meier",
    age:17,
    grades:[{ grade:"A"},{grade:2},{grade:"F"},{grade:3},{grade:1},{grade:"B"},{grade:2},{grade:5}]
}
function printInformationAboutAStudent(student : Student){
    console.log(student.firstName + " " + student.lastName + " (" +student.age + ")")
   console.log("=========================================")
    console.log("Noten: " + student.grades.map((element)=>{return element.grade}).join(","))
}
printInformationAboutAStudent(anton)

//////////
