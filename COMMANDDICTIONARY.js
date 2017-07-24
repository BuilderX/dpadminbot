var BOTCOMMANDS = {}


function addNewCommand(CommandName, commandVal){
        BOTCOMMANDS[CommandName] = commandVal;
}
function deleteCommand(CommandName, commandVal){
        delete BOTCOMMANDS[CommandName];
}



