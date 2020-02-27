function Show() {
    let array = ["father", "mother", "dog", "cat", "apple", "table"];
    let array1 = ["baba", "mama", "con cho", "con meo", "qua tao", "cai ban"];
    let name = document.getElementById("text1").value;
    if (array.indexOf(name) !== -1) {
        let array2 = array1[array.indexOf(name)];
        document.getElementById("text2").value = array2.toString();
    } else {
        document.getElementById("text2").value = " khong co chu nay";
    }
}