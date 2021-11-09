export default function confirmEnding(str, target) {
    let targetLength = target.length;
    str = str.slice(-targetLength) === target;
    console.log(str);
    return str;
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");
