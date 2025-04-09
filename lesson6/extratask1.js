//!length of a and b can not be same!
function strLength(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else if (b.length < a.length) {
        return b + a + b;
    } else {
        return ("Error");
    }
}
console.log(`"${strLength("", '1')}"`)  // length of "a" = zero. Result = "1"
console.log(`"${strLength(" ", '22')}"`)  // length of "a" = 1. Result = " 22 "
console.log(`"${strLength("22", '1')}"`)  // Result = "1221"
console.log(`"${strLength("3 3", '1')}"`)  // Result = "13 31"