console.log("Hello World!")
//#4a-4b
console.log("Hello, My name is Cameron Gardner")
console.log("This is a 'single quoted statement'and this is a \"double quoted statement\" !!")
//#5a-5e
console.log("2 plus 2 equals\xa0" +  (2+2))
console.log("56 divided by 7 equals\xa0" + (56/7))
console.log("42.6 times 18.3 equals\xa0" + (42.6*18.3))
console.log("83.97 minus 34.86 equals\xa0" + (83.97-34.86))
console.log("49 mod 8 equals\xa0" + (49%8))
//#6a-6e
console.log("The answer is:\xa0" + (5 + 4 + 3 / 2 * 6 -1))
console.log("The answer is:\xa0" + (29*75+32/8))
console.log("The answer is:\xa0" + ((42+89)*3)/(72-36))
console.log("The answer is:\xa0" + (4%3))
console.log("The answer is:\xa0 $" + (33.00-15.87))
//#7a-7r
console.log("The type of '56' is:\xa0" + typeof(56))
console.log("The type of '43.211' is:\xa0" + typeof(43.211))
console.log("The type of '2' is:\xa0" + typeof(2))
console.log("The type of 'two' is:\xa0" + typeof(two))
console.log("The type of 'new Date()' is:\xa0" + typeof(new Date()))
console.log("The type of '[]' is:\xa0" + typeof([]))
console.log("The type of '{}' is:\xa0" + typeof({}))
console.log("The type of 'true' is:\xa0" + typeof(true))
console.log("The type of 'True' is:\xa0" + typeof(True))
console.log("The type of 'false' is:\xa0" + typeof(false))
console.log("The type of 'False' is:\xa0" + typeof(False))
console.log("The type of \"false\" is:\xa0" + typeof("false"))
console.log("The type of 'Null' is:\xa0" + typeof(Null))
console.log("The type of 'Undefined' is:\xa0" + typeof(Undefined))
console.log("The type of 'NaN' is:\xa0" + typeof(NaN))
console.log("The type of '0' is:\xa0" + typeof(0))
console.log("The type of \"0\" is:\xa0" + typeof("0"))
console.log("The type of \"\" is:\xa0" + typeof(""))
//#8a
var foo = 2 
var bar = 3
//#8b
var total = foo + bar
//#8c
var total = foo + bar * total
//#8d
var total = total/bar
//#8e
var total = Math.pow(total, 2)
//#8f
console.log("The final total is:\xa0" + total + ",when the starting values are 'foo':\xa0"+ foo + "\xa0 and 'bar:'" + bar)