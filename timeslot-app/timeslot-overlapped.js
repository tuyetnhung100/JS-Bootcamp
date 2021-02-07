// Check that all slots are not overlapped
// Solution 2 (check for anything goes into the interval of target)
function checkNotOverlapped2(current, target) {
    const isNotOverlapped = true;
    // Conditions of overlap
    if ((current.start >= target.start && current.start <= target.end) || 
    (current.end >= target.start && current.end <= target.end)) { 
        if (current.start >= target.end) {
            return isNotOverlapped;
        } 
        if (current.end <= target.start) {
            return isNotOverlapped;
        }
        return !isNotOverlapped;
    }

    if (current.start < target.start && current.end > target.end) {
        return !isNotOverlapped;
    }

    return isNotOverlapped;
}    

// Solution 1 (check for anything that is outside of target interval)
function checkNotOverlapped1(current, target) {
    const isNotOverlapped = true;
    // Conditions of not overlap
    if ((current.start < target.start && current.end <= target.start) || 
    (current.end > target.end && current.start >= target.end)) {
        return isNotOverlapped;
    }
}

var target = { start: 1000, end: 1300 };

// after
console.log(checkNotOverlapped1({ start: 0800, end: 0900 }, target) ? 'passed' : 'failed');

// start touching
console.log(checkNotOverlapped1({ start: 0900, end: 1000 }, target) ? 'passed' : 'failed');

// start inside
console.log(checkNotOverlapped1({ start: 0800, end: 1100 }, target) ? 'failed' : 'passed');

// inside start touching
console.log(checkNotOverlapped1({ start: 1000, end: 1500 }, target) ? 'failed' : 'passed');

// enclosing start touching
console.log(checkNotOverlapped1({ start: 1000, end: 1200 }, target) ? 'failed' : 'passed');

// enclosing
console.log(checkNotOverlapped1({ start: 1100, end: 1200 }, target) ? 'failed' : 'passed');

// enclosing end touching
console.log(checkNotOverlapped1({ start: 1100, end: 1300 }, target) ? 'failed' : 'passed');

// exact match
console.log(checkNotOverlapped1({ start: 1000, end: 1300 }, target) ? 'failed' : 'passed');

// inside
console.log(checkNotOverlapped1({ start: 0800, end: 1500 }, target) ? 'failed' : 'passed');

// inside end touching
console.log(checkNotOverlapped1({ start: 0800, end: 1300 }, target) ? 'failed' : 'passed');

// end inside
console.log(checkNotOverlapped1({ start: 1200, end: 1500 }, target) ? 'failed' : 'passed');

// end touching
console.log(checkNotOverlapped1({ start: 1300, end: 1500 }, target) ? 'passed' : 'failed');

// before
console.log(checkNotOverlapped1({ start: 1400, end: 1500 }, target) ? 'passed' : 'failed');

console.log('-Solution 2-')

// after
console.log(checkNotOverlapped2({ start: 0800, end: 0900 }, target) ? 'passed' : 'failed');

// start touching
console.log(checkNotOverlapped2({ start: 0900, end: 1000 }, target) ? 'passed' : 'failed');

// start inside
console.log(checkNotOverlapped2({ start: 0800, end: 1100 }, target) ? 'failed' : 'passed');

// inside start touching
console.log(checkNotOverlapped2({ start: 1000, end: 1500 }, target) ? 'failed' : 'passed');

// enclosing start touching
console.log(checkNotOverlapped2({ start: 1000, end: 1200 }, target) ? 'failed' : 'passed');

// enclosing
console.log(checkNotOverlapped2({ start: 1100, end: 1200 }, target) ? 'failed' : 'passed');

// enclosing end touching
console.log(checkNotOverlapped2({ start: 1100, end: 1300 }, target) ? 'failed' : 'passed');

// exact match
console.log(checkNotOverlapped2({ start: 1000, end: 1300 }, target) ? 'failed' : 'passed');

// inside
console.log(checkNotOverlapped2({ start: 0800, end: 1500 }, target) ? 'failed' : 'passed');

// inside end touching
console.log(checkNotOverlapped2({ start: 0800, end: 1300 }, target) ? 'failed' : 'passed');

// end inside
console.log(checkNotOverlapped2({ start: 1200, end: 1500 }, target) ? 'failed' : 'passed');

// end touching
console.log(checkNotOverlapped2({ start: 1300, end: 1500 }, target) ? 'passed' : 'failed');

// before
console.log(checkNotOverlapped2({ start: 1400, end: 1500 }, target) ? 'passed' : 'failed');