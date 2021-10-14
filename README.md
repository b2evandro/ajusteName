# Normalize

 A partir do JavaScript ES 6 (2015), existe um recurso chamado Normalize que permite substituir acentos por caracteres sem acentuação.
 Para brasileiros e latinos isso ajuda a não quebrar a aplicação com nomes locais. 


Nesse exemplo só deixei letras e número. Os espaços são retirados, mas é facil deixalos usando `\s` na regex de subtituição. 
 ```JavaScript
function convertName(nameInput){

return nameInput.normalize("NFD").replace(/[^a-zA-Zs1-9]/g, "").toLowerCase();
}

convertName("São Paulo")

// output "saopaulo"
 ```