/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let placesToVisit: string[] = ["Maldivies", "Skardu", "Hunza", "Harappa", "K2 Mountain"]
console.log(`Original Form: ${placesToVisit}`)
console.log(`Alphabitical Order: ${placesToVisit.slice().sort()}`)
console.log(`Still in Original Form: ${placesToVisit}`)
console.log(`In Reverse order: ${placesToVisit.reverse()}`)
console.log(`It's Order has changed: ${placesToVisit}`)
console.log(`In Reverse order: ${placesToVisit.reverse()}`)
console.log(`Back to it's original form: ${placesToVisit}`)
console.log(`Alphabitical Order: ${placesToVisit.sort()}`)
console.log(`It's order has been changed: ${placesToVisit}`)
console.log(`It's order has been changed to reverse: ${placesToVisit.sort().reverse()}`)