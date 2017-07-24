var BOTCOMMANDS = {}

// didn't have much time at work will add more later.

function addNewCommand(CommandName, commandVal){
        BOTCOMMANDS[CommandName] = commandVal;
}
function deleteCommand(CommandName, commandVal){
        delete BOTCOMMANDS[CommandName];
}



