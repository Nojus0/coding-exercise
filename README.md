# Coding Exercise
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/Nojus0/coding-exercise)

https://coding-exercise-nojus.netlify.app

![Home Page](https://raw.githubusercontent.com/Nojus0/coding-exercise/main/images/homepage.png)

# The Stack
1. Framework - React
2. State Management Library - Redux
3. Grid Library - AG-Grid
4. Testing Libraries - Vitest and @testing-library/react
5. Styling - CSS Modules
6. Bundler - Vite

# Redux Slices
Students Slice Holds a list of students, and a boolean for deciding if to show the delete button.

Students Slice Actions `addStudent`, `removeStudentsByName` and `setDeleteButtonVisibility`

# AG-Grid
Creates a Grid with `Name`, `Score`,`Class` fields and applies their appropriate filters (Text Filter, Number Filter, Set Filter).

Retrieves the student array from the Students Slice, to display them on a grid.

# Action Bar / Top Bar
Consists of a Name, Score textbox, Class dropdown and a Add Button.
After pressing the Add button the values from the `Name`, `Score` and `Class` input's get converted into a _Student_ object, and get pushed onto the students array.
