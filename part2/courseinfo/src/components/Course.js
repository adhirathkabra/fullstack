import React from 'react'

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}
  
const Total = ({ course }) => {
  const noExercises = course.parts.map((part) => part.exercises)
  return(
    <p><b>total of {noExercises.reduce((a, b) => a + b, 0)} exercises</b></p>
  ) 
}
  
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}
  
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => <Part key={part.id} part={part} />)}
    </div>
  )
}
  
const Course = ({ courses }) => {
  return (
    courses.map((course) =>
    <div key={course.id}>
      <Header course={course} /> 
      <Content course={course} />
      <Total course={course} />
    </div>
    )
  )
}

export default Course