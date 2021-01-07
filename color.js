/* Solve the following pb and color accordingly
The array is arranged 0 through 9 so replace the appropriate one. */

var col = [
  '#FFF', // 0 Don't touch this one
  '#F00', // 1 Dennis
  '#FFF', // 2 Becky
  '#8B4513', // 3 Alexandria
  '#00F', // 4 Emely
  '#F00', // 5 Kristina
  '#DA9', // 6 Madeline
  '#8B4513', // 7 Leah
  '#00F', // 8 Carson
  '#000', // 9 Brianna
]


/* Spot |      Problem          |  Answer 1                     |   Answer 2   
     1  |  (3, 2)  and  (4, 9)  | y = 7x - 19         '#F00'    | y = 7x + 21     '#DA9'
     2  |  (-1, 0)  and (3, 2)  | y = (1/2)x + (1/2)  '#DA9'    | y = 2x - 1      '#00F'
     3  |  (-2, 8) and (0, -6)  | y = -7x - 6         '#8B4513' | y = 7x + 6      '#000'
     4  |  (-1, 3) and (-2, 7)  | y = -4x - 1         '#00F'    | y = 4x + 8      '#8B4513'
     5  | (-5, 3) and (-2, -3)  | y = (1/2)x - 5      '#8B4513' | y = -2x - 7     '#F00'
     6  | (-3, 2) and (-2, -1)  | y = (1/3)x - 3      '#000'    | y = -3x - 7     '#DA9'
     7  |(-3, -11) and (-8, -1) | y = 2x + 15         '#DA9'    | y = -2x - 17    '#8B4513'   
     8  |  (3, -9) and (0, 0)   | y = -3x             '#00F'    | y = -3x + 18    '#F00'   
     9  |  (8, -1) and (0, 3)   | y = -2x + 15        '#00F'    | y = -(1/2)x + 3 '#000'
*/

console.log(col);

