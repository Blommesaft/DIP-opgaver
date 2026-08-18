let list1 = [0, 2, 4, 6, 7, 8, 12, 13, 14];
let list2 = [1, 3, 5, 7, 9, 10, 11, 12];

let result = [];

let i1 = 0;
let i2 = 0;

// flet sålænge der er noget i begge lister
while (i1 < list1.length && i2 < list2.length) {
	if (list1[i1] < list2[i2]) {
        // s1's første tal er mindst
		result.push(list1[i1]);
		i1++;
	} else { // s2's første tal er mindst
		result.push(list2[i2]);
		i2++;
	}
}
// tøm listen der ikke er tom
while (i1 < list1.length) {
	result.push(list1[i1]);
	i1++;
}
	
while (i2 < list2.length) {
	result.push(list2[i2]);
	i2++;
}

console.log(result.toString());