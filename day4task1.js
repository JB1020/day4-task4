var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 3" };
var jb;
if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
        if (obj1[key] == obj2[key]) {
            jb = "match";

        } else {
            jb = "not match";
            break;
        }
    }
} else {
    jb = " not match";
}
console.log(jb);