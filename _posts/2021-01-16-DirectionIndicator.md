---
title: "Direction and Space Indicators HUD"
classes: wide
excerpt: "A togglable HUD that shows which direction you are moving and when you press jump."
tags: 
  - Tools
---

### Installation:
Copy the contents below and paste into your live map.  


### Customization:
To toggle the HUD on/off, use any *Spray*.  

To change the hotkey, look in the *conditions* section of the rule named *HUD*.  
There will be a disabled condition that you can modify.  
Be sure to enable that condition and disable the *Spray* condition above it.  


```
variables
{
	player:
		100: directionString
		101: wasdString
		102: jumpIndicator
		103: showWASD
		104: wasdCollector
}

rule("HUD -------------------------------------------------- WASD / Space Indicators for Spec")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Communicating Any Spray(Event Player) == True;
		disabled Is Button Held(Event Player, Button(Ultimate)) == True;
	}

	actions
	{
		If(Event Player.showWASD == False);
			Event Player.jumpIndicator = Custom String("            ");
			Event Player.wasdCollector = Array();
			Create HUD Text(Event Player, Event Player.jumpIndicator, Null, Null, Top, -46, Color(White), Color(White), Color(White),
				Visible To and String, Default Visibility);
			Modify Player Variable(Event Player, wasdCollector, Append To Array, Last Text ID);
			Create HUD Text(Event Player, Event Player.wasdString, Null, Null, Top, -46, Color(White), Color(White), Color(White),
				Visible To and String, Default Visibility);
			Modify Player Variable(Event Player, wasdCollector, Append To Array, Last Text ID);
			disabled Create HUD Text(Event Player, Event Player.directionString, Null, Null, Top, -46, Color(White), Color(White), Color(White),
				Visible To and String, Default Visibility);
			disabled Modify Player Variable(Event Player, wasdCollector, Append To Array, Last Text ID);
			Event Player.showWASD = True;
		Else;
			Destroy HUD Text(Event Player.wasdCollector[0]);
			Destroy HUD Text(Event Player.wasdCollector[1]);
			Destroy HUD Text(Event Player.wasdCollector[2]);
			Event Player.showWASD = False;
	}
}

rule("Check for direction ------------------------------ WASD / Space Indicators for Spec")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Event Player.showWASD == True;
	}

	actions
	{
		"Forward"
		If(Z Component Of(Throttle Of(Event Player)) == 1 && X Component Of(Throttle Of(Event Player)) == 0);
			Event Player.directionString = Custom String("     ·     \n           \n           ");
			Event Player.wasdString = Custom String(" _↑_ _ ");
		"Backwards"
		Else If(Z Component Of(Throttle Of(Event Player)) == -1 && X Component Of(Throttle Of(Event Player)) == 0);
			Event Player.directionString = Custom String("           \n           \n     ·     ");
			Event Player.wasdString = Custom String(" _ _↓_ ");
		"Left"
		Else If(Z Component Of(Throttle Of(Event Player)) == 0 && X Component Of(Throttle Of(Event Player)) == 1);
			Event Player.directionString = Custom String("           \n  ·        \n           ");
			Event Player.wasdString = Custom String("←_ _ _ ");
		"Right"
		Else If(Z Component Of(Throttle Of(Event Player)) == 0 && X Component Of(Throttle Of(Event Player)) == -1);
			Event Player.directionString = Custom String("           \n        ·  \n           ");
			Event Player.wasdString = Custom String(" _ _ _→");
		"Forward Left"
		Else If(Z Component Of(Throttle Of(Event Player)) == 1 && X Component Of(Throttle Of(Event Player)) == 1);
			Event Player.directionString = Custom String("  ·        \n           \n           ");
			Event Player.wasdString = Custom String("←↑_ _ ");
		"Forward Right"
		Else If(Z Component Of(Throttle Of(Event Player)) == 1 && X Component Of(Throttle Of(Event Player)) == -1);
			Event Player.directionString = Custom String("        ·  \n           \n           ");
			Event Player.wasdString = Custom String(" _↑_→");
		"Backwards Left"
		Else If(Z Component Of(Throttle Of(Event Player)) == -1 && X Component Of(Throttle Of(Event Player)) == 1);
			Event Player.directionString = Custom String("           \n           \n  ·        ");
			Event Player.wasdString = Custom String("←_↓_ ");
		"Backwards Right"
		Else If(Z Component Of(Throttle Of(Event Player)) == -1 && X Component Of(Throttle Of(Event Player)) == -1);
			Event Player.directionString = Custom String("           \n           \n        ·  ");
			Event Player.wasdString = Custom String(" _ _↓→");
		"No input"
		Else If(Z Component Of(Throttle Of(Event Player)) == 0 && X Component Of(Throttle Of(Event Player)) == 0);
			Event Player.directionString = Custom String("           \n     ·     \n           ");
			Event Player.wasdString = Custom String(" _ _ _ _ ");
		End;
		Wait(Update Every Frame(Throttle Of(Event Player)), Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("Check for space ---------------------------------- WASD / Space Indicators for Spec")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Jump)) == True;
		Event Player.showWASD == True;
	}

	actions
	{
		Event Player.jumpIndicator = Custom String("SPACE");
		Wait Until(!Is Button Held(Event Player, Button(Jump)), 99999);
		Event Player.jumpIndicator = Custom String("             ");
	}
}
```
