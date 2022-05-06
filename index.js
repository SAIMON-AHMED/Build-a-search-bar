document.getElementById("searchInput").addEventListener("keyup", function(event) { //keyup event
    let searchQuery = event.target.value.toLowerCase(); //toLowerCase() method makes every letter lowercase. target get the targeted element. value get the value of the targeted element
    let allNamesDOMCollection = document.getElementsByClassName('name'); // getElementsByClassName is similar to getElementById. element(id) and elements(class)
    
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        
        if (currentName.includes(searchQuery)) { //The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
            allNamesDOMCollection[counter].style.display = "block";
        } else { // have to use else, otherwise it won't work
            allNamesDOMCollection[counter].style.display = "none";
        }
    }
});
