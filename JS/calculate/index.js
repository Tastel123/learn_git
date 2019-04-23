// S 5
// A 3
// B 2
// C 1
// level key 计算函数
let stratigies = {
    'S': function(salary) {
        return salary * 5;
    },
    'A': function(salary) {
        return salary * 3;
    },
    'B': function(salary) {
        return salary * 2;
    },
    'C': function(salary) {
        return salary * 1;
    }
}

function calculate(level,salary) {

    return stratigies[level](salary);

    
    // if(level === 'S')
    //     {return salary * 5;}
    // if(level === 'A')
    //     return salary * 3;
    // if(level === 'B')
    //     return salary * 2;
    // if(level === 'C')
    //     return salary * 1;  

    // 分支

}

console.log(calculate('S',10000))