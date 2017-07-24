var BOTCOMMANDS = {}

// didn't have much time at work will add more later.

function addNewCommand(CommandName, commandVal){
        BOTCOMMANDS[CommandName] = commandVal;
}
function deleteCommand(CommandName, commandVal){
        delete BOTCOMMANDS[CommandName];
}

//test 
//add a memeber to a role
function roleSearc(name,role){
 let role = message.guild.roles.find(name,role);
}
function memberGrab(){
        let member = message.mentions.members.first();
           return memeber;
}
function addMemberRole(role, memeber){
      member.addRole(role).catch(console.error);
}

function rmMemberRole(role, memeber){
      member.removeRole(role).catch(console.error);
}

function getAllMemberPermissions(){
        let perm = message.memeber.permissions;
}
function checkPermissions(perm){
        let has_certain_permission = message.member.hasPermission(perm);
        //log message 
        console.log(has_certain_permissions);
}

addNewCommand("find role", roleSearch);
addNewCommand("member", memberGrab);
addNewCommand("addRole", addMemeberRole);
addNewCommand("removeRole", rmMemberRole);
addNewCommand("getAllMemberPerm", getAllMemberPermissions);
addNewCommand("checkPerm", checkPermissions);

