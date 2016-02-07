loop {
// Variables defined
	var Attack = this.findFlag("black");
	var Move = this.findFlag("green");
	var Retreat = this.findFlag("violet");
// And the functions here
if (Attack) {
	var Enemy = this.findNearestEnemy;
	while (Enemy) {
		this.attack(Enemy); }}
if (Move) {
	this.pickUpFlag(Move); } 
if(Retreat) {
this.say("Function coming soon!");
this.pickUpFlag(Retreat);
}
