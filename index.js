function convertName(nameInput){

return nameInput.normalize("NFD").replace(/[^a-zA-Zs1-9]/g, "").toLowerCase();
}

convertName("São Paulo")