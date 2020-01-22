//improved script by athena#0162
//onetap.com/members/cardboardpizzza.5658/

UI.AddLabel("<---------------------------------------->"); //just for menu sorting

hitboxes = [
'generic',
'head',
'chest',
'stomach',
'left arm',
'right arm',
'left leg',
'right leg',
'body'
];
function getHitboxName(index) {
return hitboxes[index] || 'Generic';
}
function chatlogs()
{
 //define
  me = Entity.GetLocalPlayer();
  hitbox = Event.GetInt('hitgroup');
  target_damage = Event.GetInt("dmg_health");
  victim = Event.GetInt('userid');
  attacker = Event.GetInt('attacker');
  victimIndex = Entity.GetEntityFromUserID(victim);
  attackerIndex = Entity.GetEntityFromUserID(attacker);
  name = Entity.GetName(victimIndex);
  spread = Local.GetSpread();
  realtime = Globals.Realtime();
  frametime = Globals.Frametime();
  inaccuracy = Local.GetInaccuracy();
  localplayer_index = Entity.GetLocalPlayer( );
  localplayer_weapon = Entity.GetWeapon(localplayer_index);
  weapon_name = Entity.GetName(localplayer_weapon);
  username = Cheat.GetUsername();

  //prefix box
  prefixa = UI.GetString ( "Misc", "JAVASCRIPT", "Script Items", "Local Prefix" );

if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Local Logs" ) ){
if (me == attackerIndex && me != victimIndex) {
if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Broadcast" ) ) {
Global.ExecuteCommand("say \x01[\x06" + prefixa + "\x01] \x04" + username + " \x01hurt \x04" + name + " \x01for \x04" + target_damage + " \x01in \x04" + getHitboxName(hitbox) + "\x01" + " with a " + "\x04" + weapon_name)// + ", " + "Inaccuracy: " + inaccuracy + ", " + "Time: " + realtime + ", FrameTime: " + frametime + " Spread: " + spread)
  }else
    {
  Global.PrintChat("\x01[\x06" + prefixa + "\x01] \x04" + "\x04You " + "\x01hurt \x04" + name + " \x01for \x04" + target_damage + " \x01in \x04" + getHitboxName(hitbox) + "\x01" + " with a " + "\x04" + weapon_name)
    }
  }
}
}

//enemy logs
function enemychatlogs()
{
 //define
  me = Entity.GetLocalPlayer();
  hitbox = Event.GetInt('hitgroup');
  target_damage = Event.GetInt("dmg_health");
  spread = Local.GetSpread();
  realtime = Globals.Realtime();
  frametime = Globals.Frametime();
  inaccuracy = Local.GetInaccuracy();
  localplayer_index = Entity.GetLocalPlayer( );
  localplayer_weapon = Entity.GetWeapon(localplayer_index);
  weapon_name = Entity.GetName(localplayer_weapon);
  //username = Cheat.GetUsername();
  attacker = Event.GetInt("attacker");
  attacker_index = Entity.GetEntityFromUserID(attacker);
  victim = Event.GetInt("userid");
  victim_index = Entity.GetEntityFromUserID(victim);
  attacker_name = Entity.GetName(attacker_index);
  victim_name = Entity.GetName(victim_index);
  username = Cheat.GetUsername();
  //prefix box
  prefixa = UI.GetString ( "Misc", "JAVASCRIPT", "Script Items", "Enemy Prefix" );

if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Enemy Logs" ) ){
if (me != attackerIndex && me == victimIndex) {
if( UI.GetValue ( "Misc", "JAVASCRIPT", "Script Items", "Broadcast" ) ) {
Global.ExecuteCommand("say \x01[\x06" + prefixa + "\x01] \x04" + attacker_name + " \x01hurt \x04" + username + " \x01for \x04" + target_damage + " \x01in \x04" + getHitboxName(hitbox))// + ", " + "Inaccuracy: " + inaccuracy + ", " + "Time: " + realtime + ", FrameTime: " + frametime + " Spread: " + spread)
  }else
    {
  Global.PrintChat("\x01[\x06" + prefixa + "\x01] \x04" + attacker_name + " \x01hurt \x04" + "\x04You" + " \x01for \x04" + target_damage + " \x01in \x04" + getHitboxName(hitbox))
    }
  }
}
}


function main()
{
UI.AddTextbox("Local Prefix"); //prefix textbox
UI.AddTextbox("Enemy Prefix"); //prefix textbox
UI.AddCheckbox("Local Logs"); // power switch
UI.AddCheckbox("Enemy Logs"); // power switch
UI.AddCheckbox("Broadcast");
UI.AddLabel("<---------------------------------------->"); // just for menu sorting
Global.RegisterCallback("player_hurt", "chatlogs");
Global.RegisterCallback("player_hurt", "enemychatlogs");
}

main();
