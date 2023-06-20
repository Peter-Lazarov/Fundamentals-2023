function sortingTwo(input){
    let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    //console.log(sorted);
    sorted.forEach(word => console.log(word));
}

sortingTwo(['alpha','beta','gamma']);
sortingTwo(['Isacc','Theodor','Jack','Harrison','George']);
