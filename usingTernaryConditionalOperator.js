function checkEqual(a, b) {
        return (a === b) ? (a == b) : (a == b);
        // return a > b ? "a > b" : "b > a";
        // ( a == b ? a == b : a != b ) << " is equal.";
}

checkEqual(1, 2);
checkEqual(1, -1);