let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan === true) {
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan === true) {
    console.log('Make sure to offer up some vegan dishes.')
} else {
    console.log('Offer up anything on the menu.')
}