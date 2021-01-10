let getGrade = function (studentScore, totalScore) {
    let percent = studentScore / totalScore * 100
    let letterGrade = ''
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else if (percent >= 0) {
        letterGrade = 'F'
    }
    return `${studentScore}/${totalScore} -> You got a ${letterGrade} (${percent}%)!`
}

let result = getGrade(15,20)
console.log(result)
