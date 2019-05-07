let m = mglue;

class BasicGame extends m.Game
{
	onBeginGame()
	{
	}
	update()
	{
	}
}

var g: BasicGame;

m.Config.title = "NEW GAME";
m.Config.saveName = "newGame";
m.Game.runOnReady(() =>
{
	g = new BasicGame();
});
