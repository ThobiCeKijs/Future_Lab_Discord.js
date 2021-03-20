exports.run = async (client, message, args) => {
if (message.channel.id !== "817169537526005780") {
  return;
} // Id do canal onde podera dar esse comando

await message.delete();
await message.member.roles.add("817167325522427935");
return; // id do cargo

if (message.channel.id !== "817169537526005780") {
  return;
} // id do canal

await message.delete();
await message.member.roles.add("817167325522427935"); // e novamente o id do cargo
return;
}
