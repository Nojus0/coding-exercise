# Coding Exercise
https://coding-exercise-nojus.netlify.app

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
After pressing Add the values from the name, score and score input's get converted into a student object, and get pushed to the Students Slice student array.
