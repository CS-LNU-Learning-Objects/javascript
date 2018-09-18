'use strict'

const courses = [
  { code: '1DV525', students: 55, type: 'distance', url: 'https://github.com/1dv525' },
  { code: '1DV607', students: 104, type: 'campus', url: 'https://github.com/1dv607' },
  { code: '1DV607', students: 67, type: 'distance', url: 'https://coursepress.lnu.se/1dv021'},
  { code: '1DV523', students: 35, type: 'distance', url: 'https://github.com/1dv021' }
]

// 1. Number of students taking distance courses and using github.com as url.
let filtered = courses
    .filter((course) => course.type === 'distance')
    .filter((course) => course.url.substr(0, 19) === 'https://github.com/')
    .map((course) => course.students)
    .reduce((prev, curr) => (prev || 0) + curr)

console.log(filtered)
