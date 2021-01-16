---
title: "Hints & Force Orb Order Mod for Hax Framework"
excerpt: "A mod for Hax Framework to add hints and force the order of ability orbs."
toc: true
toc_label: "Contents"
toc_sticky: true
---

A collaboration between nebula and Nooter.

This mod requires Hax's Doomfist Parkour play template (CODE: KNEAT).

This mod adds the ability to create hints for CPs of your choosing. 
If a player fails a checkpoint that has been marked as a Hint CP, a small message (of your making) will appear briefly. The message will only display for the first 7 times that a player fails a particular CP. The player can also view the hint manually, any number of times, by pressing Melee.  Hints will only appear if Pro Mode is off.

In addition, this mod adds the ability to force the order of picking up ability orbs. This is not to be used with any other orbs than **ability** orbs. Death orbs will **NOT** work. I have not tested any other orb but I assume they will all be broken on any checkpoint that uses this mod!  


<div class="notice--danger">
  <b>DANGER:</b>  
  
This is a modification to the KNEAT template made by Hax. BEFORE PASTING ANY CODE, MAKE SURE YOU ARE NOT OVERWRITING ANY EXISTING VARIABLES or SUBROUTINES. 

Variables and subroutines in the workshop are numbered, check that the NEW variables and subroutines defined in this mod are free in your live map (ie. make sure its number is a free slot in the variable list (non-free variables are greyed out); if not, change its number to a number with a free slot).
</div>

## Reference for New Variables & Subroutines:
```
variables
{
	global:
		123: tempIterator
		124: menuItems
		125: menuTextCollector
		126: orbHintArray
		127: hintStringsArray

	player:
		117: LevelLengths
		118: LevelCheckpoints
		119: dataCorrector
		120: orbHintArrayCopy
		121: hintStringsArrayCopy
		122: deletedLevel
		123: currentHintCP
		124: autoHintCounter
		125: confirmDelete
		126: menuIsOpen
		127: currentMenuSelection
}

subroutines
{
	126: DisableControls
	127: EnableControls
}
```

---

# Installation

## Step One: Map Creation

**ATTENTION:** Save your map data!!! Preferably in a .txt file!!!
{: .notice--warning}

IN THE HAVVX TEMPLATE:  
1. Copy and paste the code from [HAVVX Orb Numbers](#havvx-orb-numbers) and reload.  
This allows you to see clearly the order of the orbs while creating a checkpoint.  
I suggest placing all orbs you will need *BEFORE* fine-tuning their size/position because the numbering changes during orb creation.  
Otherwise, you may have to reposition the orbs!  

## Step Two: Installation / Synchronization / Marking Checkpoints
IN THE KNEAT TEMPLATE:
1. Copy and paste the contents of [Hints & Force Orb Order Mod](#hints--force-orb-order-mod) into your live map and reload.  

    <figure>
        <a href="/assets/images/hintorb/paste-rule.png"><img src="/assets/images/hintorb/paste-rule.png"></a>
    </figure>

2. Press any *Spray* to open (and close) the menu.  
3. Click *Synchronize* to install; this will initialize the marking arrays. You can click this button at any time to ensure data is synced! 
  If you have previously installed this mod and recently deleted a level, you will recieve a message saying data is corrupt, read the [Troubleshooting](#troubleshooting) section.{: .notice--warning}
4. Navigate to the checkpoints that require this mod, open the menu, and click the corresponding button to mark the checkpoint as *Hint*, *2 Orb*, or *3 Orb*.  
A small message will appear on screen showing that the checkpoint has been set to *True*.   
You are unable to set a single checkpoint to both 3 Orb and 2 Orb. It will default to the last selection.  

## Step Three: Saving Data
1. Press *Esc* and then click the *Open Workshop Inspector* button.  
2. Select *Global* from the drop down menu in the bottom right corner of the Inspector.  

    <figure>
        <a href="/assets/images/hintorb/global-target.png"><img src="/assets/images/hintorb/global-target.png"></a>
    </figure>

3. Click the "(x)" button directly to the left of the drop-down menu which will copy to clipboard all global variables as workshop actions.  

    <figure>
        <a href="/assets/images/hintorb/copy-contents.png"><img src="/assets/images/hintorb/copy-contents.png"></a>
    </figure>

4. Paste what you copied from the Inspector into the *actions* section of the *Paste Orb / Hint Data Here* rule which is located at the bottom of the rule list.    
    The only actions you will need in this list are the last two. They define the variables *Global.orbHintArray* and *Global.hintStringsArray*.

    <figure>
        <a href="/assets/images/hintorb/array-variables.png"><img src="/assets/images/hintorb/array-variables.png"></a>
    </figure>

    Don't worry if your arrays will not look the same as this; they will be much longer.  
5. Use the *Select All* button in the *actions* section and uncheck the two arrays *Global.orbHintArray* and *Global.hintStringsArray*. 

    <figure>
        <a href="/assets/images/hintorb/select-all.png"><img src="/assets/images/hintorb/select-all.png"></a>
    </figure>

6. Use the *Delete* button in the *actions* section to delete all unnecessary data.

    <figure>
        <a href="/assets/images/hintorb/delete-actions.png"><img src="/assets/images/hintorb/delete-actions.png"></a>
    </figure>


## Step Four: Entering Hint Messages
Skip this step if you are not using hints.
{: .notice--info}

The variable, *Global.hintStringsArray*, contains the text that will appear as a hint.
1. In a text editor, replace the dummy text with your Hint Messages where appropriate. 
	- *NOTE*: Keep your Hint Message brief! It should not exceed one line.  

	- *NOTE*: any text in a Custom String MUST be placed bewteen quotations: eg. Custom String("[your text here]") will display: [your text here]
2. *(Optional)* Save the .txt file as Hint Data.txt for safety 
3. Now, Select All, copy, and paste these updated actions into the "Paste Orb / Hint Data Here" Rule and delete the old *Global.hintStringsArray*.

## Step Five: Disabling Rules
1. Disable the Hax Framework rule named *TCD detect*. If this is not done, this mod may not work properly!  

    <figure>
        <a href="/assets/images/hintorb/disable-rules.png"><img src="/assets/images/hintorb/disable-rules.png"></a>
    </figure>

2. Disable the rules that are located between the two that look like:
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   


## Step Six: Finishing Up
1. Restart the lobby.
2. Save settings.

---

# Troubleshooting
### Data Corrupt warning
1. Enable the SETUP and Data Corrector Rules.
2. Expand the SETUP rule. In the LevelLengths array, add entries containing the amount of checkpoints in each level (in order, and including the deleted level). Leave the first entry as 1.
3. Set the deletedLevel variable to the level that was deleted.
4. Set the dataCorrector variable True.
5. Restart the lobby, and open the Workshop Inspector.
6. Copy the Global variables (drop down menu) by pressing the (x) button
7. Save the new Global variables and replace the Hint / Orb data arrays with the new Hint / Orb data arrays from your clipboard. This is the same process as saving Hint / Orb data arrays for the first time.
8. Disable the *Data Corrector* rules when you have finished!
9. Restart the lobby and save.


---

# HAVVX Orb Numbers
```
rule("Order Text For HAVVX -------------------------- Force Orb Order Mod")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	actions
	{
			Create In-World Text(Event Player, !Event Player.TCDFdisplay[3] == True ? Custom String("1") : Custom String(""), 
				Global.TCDpos[Event Player.Checkpoint] + Vector(0,.5,0),
				1.5, Clip Against Surfaces, Visible To Position and String, Color(Red), Default Visibility);
			
			Create In-World Text(Event Player, !Event Player.TCDFdisplay[4] == True ? (Global.TCD3pos[Event Player.Checkpoint] ? Custom String("3") : Custom String("2")) : Custom String(""),
				Global.TCD2pos[Event Player.Checkpoint] + Vector(0,.5,0), 
				1.5, Clip Against Surfaces, Visible To Position and String, Color(Red), Default Visibility);
				
			Create In-World Text(Event Player, !Event Player.TCDFdisplay[5] == True ? (Global.TCD2pos[Event Player.Checkpoint] ? Custom String("2") : Custom String("3")) : Custom String(""),
				Global.TCD3pos[Event Player.Checkpoint] + Vector(0,.5,0), 
				1.5, Clip Against Surfaces, Visible To Position and String, Color(Red), Default Visibility);
	}
}
```

# Hints & Force Orb Order Mod
```
variables
{
	global:
		123: tempIterator
		124: menuItems
		125: menuTextCollector
		126: orbHintArray
		127: hintStringsArray

	player:
		117: LevelLengths
		118: LevelCheckpoints
		119: dataCorrector
		120: orbHintArrayCopy
		121: hintStringsArrayCopy
		122: deletedLevel
		123: currentHintCP
		124: autoHintCounter
		125: confirmDelete
		126: menuIsOpen
		127: currentMenuSelection
}

subroutines
{
	126: DisableControls
	127: EnableControls
}

rule("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    Hints / Force Orb Order Mod    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		"Created by nebula & Nooter"
		disabled 0 + 0 == True;
	}
}

rule("Global Variables Initilization ------------------------ Hint / Force Orb Order Mod --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Global;
	}

	actions
	{
		Global.menuItems = Array(Custom String("Synchronize"), Custom String("Add Hint"), Custom String("Add 2 Orb"), Custom String(
			"Add 3 Orb"), Custom String("Remove Hint"), Custom String("Remove 2 Orb"), Custom String("Remove 3 Orb"));
		Global.menuTextCollector = Array();
	}
}

rule("Menu HUD ----------------------------------------------- Hint / Force Orb Order Mod --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Communicating Any Spray(Host Player) == True;
	}

	actions
	{
		If(Event Player.menuIsOpen == False);
			Event Player.menuIsOpen = True;
			Call Subroutine(DisableControls);
			Create HUD Text(Event Player, Null, Null, Y Component Of(Global.orbHintArray[Event Player.Checkpoint])
				? Global.menuItems[5] : Global.menuItems[2], Top, -46, Null, Null, Event Player.currentMenuSelection == 2 ? Color(Blue)
				: Color(White), Visible To String and Color, Default Visibility);
			Modify Global Variable(menuTextCollector, Append To Array, Last Text ID);
			Create HUD Text(Event Player, Null, Null, X Component Of(Global.orbHintArray[Event Player.Checkpoint])
				? Global.menuItems[4] : Global.menuItems[1], Top, -46, Null, Null, Event Player.currentMenuSelection == 1 ? Color(Blue)
				: Color(White), Visible To String and Color, Default Visibility);
			Modify Global Variable(menuTextCollector, Append To Array, Last Text ID);
			Create HUD Text(Event Player, Null, Null, Global.menuItems[0], Top, -46, Null, Null,
				Event Player.currentMenuSelection == 0 ? Color(Blue) : Color(White), Visible To String and Color, Default Visibility);
			Modify Global Variable(menuTextCollector, Append To Array, Last Text ID);
			Create HUD Text(Event Player, Null, Null, Z Component Of(Global.orbHintArray[Event Player.Checkpoint])
				? Global.menuItems[6] : Global.menuItems[3], Top, -45, Null, Null, Event Player.currentMenuSelection == 3 ? Color(Blue)
				: Color(White), Visible To String and Color, Default Visibility);
			Modify Global Variable(menuTextCollector, Append To Array, Last Text ID);
		Else;
			Destroy HUD Text(Global.menuTextCollector[0]);
			Destroy HUD Text(Global.menuTextCollector[1]);
			Destroy HUD Text(Global.menuTextCollector[2]);
			Destroy HUD Text(Global.menuTextCollector[3]);
			Global.menuTextCollector = Array();
			Event Player.menuIsOpen = False;
			Event Player.confirmDelete = False;
			Call Subroutine(EnableControls);
	}
}

rule("Change Menu Selection ----------------------------- Hint / Force Orb Order Mod --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Event Player.menuIsOpen == True;
		Z Component Of(Normalize(Throttle Of(Event Player))) == True;
	}

	actions
	{
		If(Z Component Of(Normalize(Throttle Of(Event Player))) < 0);
			Event Player.confirmDelete = False;
			Event Player.currentMenuSelection += 1;
			If(Event Player.currentMenuSelection > 3);
				Event Player.currentMenuSelection = 0;
			End;
		Else If(Z Component Of(Normalize(Throttle Of(Event Player))) > 0);
			Event Player.confirmDelete = False;
			Event Player.currentMenuSelection -= 1;
			If(Event Player.currentMenuSelection < 0);
				Event Player.currentMenuSelection = 3;
			End;
		End;
	}
}

rule("Disable Controls --------------------------------------- Hint / Force Orb Order Mod --- DISABLE AFTER USING!!")
{
	event
	{
		Subroutine;
		DisableControls;
	}

	actions
	{
		Set Primary Fire Enabled(Event Player, False);
		Set Secondary Fire Enabled(Event Player, False);
		Set Ability 1 Enabled(Event Player, False);
		Set Ability 2 Enabled(Event Player, False);
		Set Ultimate Ability Enabled(Event Player, False);
		Set Melee Enabled(Event Player, False);
		Set Move Speed(Event Player, 0);
	}
}

rule("Enable Controls --------------------------------------- Hint / Force Orb Order Mod --- DISABLE AFTER USING!!")
{
	event
	{
		Subroutine;
		EnableControls;
	}

	actions
	{
		Set Primary Fire Enabled(Event Player, True);
		Set Secondary Fire Enabled(Event Player, True);
		Set Ability 1 Enabled(Event Player, True);
		Set Ability 2 Enabled(Event Player, True);
		Set Ultimate Ability Enabled(Event Player, True);
		Set Melee Enabled(Event Player, True);
		Set Move Speed(Event Player, 100);
	}
}

rule("Left Click Activate Selection ----------------------- Hint / Force Orb Order Mod --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Event Player.menuIsOpen == True;
		Is Button Held(Event Player, Button(Primary Fire)) == True;
	}

	actions
	{
		"Sync"
		If(Event Player.currentMenuSelection == 0);
			Play Effect(Event Player, Buff Explosion Sound, Color(White), Event Player, 30);
			"Populate arrays if no previous installation"
			If(Count Of(Global.orbHintArray) == 0);
				Small Message(Event Player, Custom String("Installing Hint / Force Orb Order Mod."));
				Global.hintStringsArray = Mapped Array(Global.CPposition, Null);
				Global.orbHintArray = Mapped Array(Global.CPposition, Vector(0, 0, 0));
				Wait(1, Ignore Condition);
				Small Message(Event Player, Custom String("Installation complete."));
			"If there are new checkpoints, create new entries in orbHintArray"
			Else If(Count Of(Global.orbHintArray) < Count Of(Global.CPposition));
				Small Message(Event Player, Custom String("Current Data out of sync: synchronizing."));
				"For each new checkpoint append a new empty vector entry"
				For Global Variable(tempIterator, Count Of(Global.orbHintArray), Count Of(Global.CPposition), 1);
					Modify Global Variable(orbHintArray, Append To Array, Vector(0, 0, 0));
					Modify Global Variable(hintStringsArray, Append To Array, Null);
					Wait(0.016, Ignore Condition);
				End;
				Wait(1, Ignore Condition);
				Small Message(Event Player, Custom String("Synchronization complete."));
				Wait(1, Ignore Condition);
				Small Message(Event Player, Custom String("Copy Global Variables from Inspector and re-paste"));
			"Corrupt Data"
			Else If(Count Of(Global.orbHintArray) > Count Of(Global.CPposition));
				If(Event Player.confirmDelete == False);
					Small Message(Event Player, Custom String(
						"Data Corrupt! Did you delete a level? Use Data Corrector in Workshop Editor to fix this error!"));
					Small Message(Event Player, Custom String("WARNING: If you click again your data will be deleted from the inspector! Close the menu to CANCEL!"));
					Event Player.confirmDelete = True;
				Else;
					Global.hintStringsArray = Mapped Array(Global.CPposition, Null);
					Global.orbHintArray = Mapped Array(Global.CPposition, Vector(0, 0, 0));
					Small Message(Event Player, Custom String("Data has been overwritten!"));
					Event Player.confirmDelete = False;
				End;
			"Data in sync"
			Else;
				Small Message(Event Player, Custom String("Current Data appears to be in sync."));
			End;
		"Add / Remove Hint"
		Else If(Event Player.currentMenuSelection == 1);
			If(X Component Of(Global.orbHintArray[Event Player.Checkpoint]) == False);
				Play Effect(Event Player, Buff Explosion Sound, Color(White), Event Player, 30);
				Small Message(Event Player, Custom String("Checkpoint {0} ({1}.{2}) has been marked as a Hint CP.", Event Player.Checkpoint,
					Event Player.Level, Event Player.CPcounter));
				"Set X Of orbHintArray vector to true"
				Global.orbHintArray[Event Player.Checkpoint] = Vector(1, Y Component Of(Global.orbHintArray[Event Player.Checkpoint]),
					Z Component Of(Global.orbHintArray[Event Player.Checkpoint]));
				"Create dummy hint text"
				Global.hintStringsArray[Event Player.Checkpoint] = Custom String(" Enter Hint for CP {0}.{1}  | Checkpoint {2} ",
					Event Player.Level, Event Player.CPcounter, Event Player.Checkpoint);
				Wait(1.500, Ignore Condition);
			Else If(X Component Of(Global.orbHintArray[Event Player.Checkpoint]) == True);
				Play Effect(Event Player, Explosion Sound, Color(White), Event Player, 30);
				If(Event Player.confirmDelete == False);
					Small Message(Event Player, Custom String("Are you sure you want to delete? Click again to delete."));
					Event Player.confirmDelete = True;
				Else;
					Small Message(Event Player, Custom String("Checkpoint {0} ({1}.{2}) has been unmarked as a Hint CP.", Event Player.Checkpoint,
						Event Player.Level, Event Player.CPcounter));
					"Set X Of orbHintArray vector to false"
					Global.orbHintArray[Event Player.Checkpoint] = Vector(0, Y Component Of(Global.orbHintArray[Event Player.Checkpoint]),
						Z Component Of(Global.orbHintArray[Event Player.Checkpoint]));
					Global.hintStringsArray[Event Player.Checkpoint] = Null;
					Event Player.confirmDelete = False;
				End;
				Wait(1.500, Ignore Condition);
			End;
		"Add / Remove 2 Orb"
		Else If(Event Player.currentMenuSelection == 2);
			If(Y Component Of(Global.orbHintArray[Event Player.Checkpoint]) == False);
				Play Effect(Event Player, Buff Explosion Sound, Color(White), Event Player, 30);
				Small Message(Event Player, Custom String("Checkpoint {0} ({1}.{2}) has been marked as a 2 Orb CP.", Event Player.Checkpoint,
					Event Player.Level, Event Player.CPcounter));
				"Set Y Of orbHintArray vector to true and Z to False"
				Global.orbHintArray[Event Player.Checkpoint] = Vector(X Component Of(Global.orbHintArray[Event Player.Checkpoint]), 1, 0);
				Wait(1.500, Ignore Condition);
			Else If(Y Component Of(Global.orbHintArray[Event Player.Checkpoint]) == True);
				Play Effect(Event Player, Explosion Sound, Color(White), Event Player, 30);
				If(Event Player.confirmDelete == False);
					Small Message(Event Player, Custom String("Are you sure you want to delete? Click again to delete."));
					Event Player.confirmDelete = True;
				Else;
					Small Message(Event Player, Custom String("Checkpoint {0} ({1}.{2}) has been unmarked as a 2 Orb CP.", Event Player.Checkpoint,
						Event Player.Level, Event Player.CPcounter));
					"Set Y Of orbHintArray vector to false"
					Global.orbHintArray[Event Player.Checkpoint] = Vector(X Component Of(Global.orbHintArray[Event Player.Checkpoint]), 0,
						Z Component Of(Global.orbHintArray[Event Player.Checkpoint]));
					Event Player.confirmDelete = False;
				End;
				Wait(1.500, Ignore Condition);
			End;
		"Add / Remove 3 Orb"
		Else If(Event Player.currentMenuSelection == 3);
			If(Z Component Of(Global.orbHintArray[Event Player.Checkpoint]) == False);
				Play Effect(Event Player, Buff Explosion Sound, Color(White), Event Player, 30);
				Small Message(Event Player, Custom String("Checkpoint {0} ({1}.{2}) has been marked as a 3 Orb CP.", Event Player.Checkpoint,
					Event Player.Level, Event Player.CPcounter));
				"Set Z Of orbHintArray vector to true and Y to false"
				Global.orbHintArray[Event Player.Checkpoint] = Vector(X Component Of(Global.orbHintArray[Event Player.Checkpoint]), 0, 1);
				Wait(1.500, Ignore Condition);
			Else If(Z Component Of(Global.orbHintArray[Event Player.Checkpoint]) == True);
				Play Effect(Event Player, Explosion Sound, Color(White), Event Player, 30);
				If(Event Player.confirmDelete == False);
					Small Message(Event Player, Custom String("Are you sure you want to delete? Click again to delete."));
					Event Player.confirmDelete = True;
				Else;
					Small Message(Event Player, Custom String("Checkpoint {0} ({1}.{2}) has been unmarked as a 3 Orb CP.", Event Player.Checkpoint,
						Event Player.Level, Event Player.CPcounter));
					"Set Z Of orbHintArray vector to false"
					Global.orbHintArray[Event Player.Checkpoint] = Vector(X Component Of(Global.orbHintArray[Event Player.Checkpoint]), Y Component Of(
						Global.orbHintArray[Event Player.Checkpoint]), 0);
					Event Player.confirmDelete = False;
				End;
				Wait(1.500, Ignore Condition);
			End;
	}
}

rule("Using Interact with this mod closes menu. ---- Hint / Force Orb Order Mod --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Event Player.menuIsOpen == True;
		Is Button Held(Event Player, Button(Interact)) == True;
	}

	actions
	{
		Destroy HUD Text(Global.menuTextCollector[0]);
		Destroy HUD Text(Global.menuTextCollector[1]);
		Destroy HUD Text(Global.menuTextCollector[2]);
		Destroy HUD Text(Global.menuTextCollector[3]);
		Global.menuTextCollector = Array();
		Event Player.menuIsOpen = False;
		Event Player.confirmDelete = False;
		Call Subroutine(EnableControls);
	}
}

rule("Data Integrity Checker ----------------------------- Hint / Force Orb Order Mod --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Count Of(Global.orbHintArray) > Count Of(Global.CPposition);
	}

	actions
	{
		Big Message(Event Player, Custom String("Data Corrupt! Did you delete a level? Use Data Corrector in Workshop Editor to fix this error!"));
		Wait(20, Ignore Condition);
		Loop If Condition Is True;
	}
}

rule("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒a")
{
	event
	{
		Ongoing - Global;
	}
}

rule("Display Hints ------------------------------------------- Hint / Force Orb Order Mod")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		(Event Player.Fail == True || (Is Button Held(Event Player, Button(Melee)) == True && Event Player.ProMode == False)) == True;
		X Component Of(Global.orbHintArray[Event Player.Checkpoint]) == True;
		(Event Player.autoHintCounter < 7 || Is Button Held(Event Player, Button(Melee))) == True;
	}

	actions
	{
		Event Player.currentHintCP = Event Player.Checkpoint;
		Small Message(Event Player, Global.hintStringsArray[Event Player.Checkpoint]);
		Skip If(Is Button Held(Event Player, Button(Melee)), 1);
		Event Player.autoHintCounter += 1;
	}
}

rule("autoHintCounter Reset ----------------------------- Hint / Force Orb Order Mod")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Event Player.Checkpoint != Event Player.currentHintCP;
	}

	actions
	{
		Event Player.autoHintCounter = 1;
	}
}

rule("TCD detect Modded --------------------------------- Hint / Force Orb Order Mod")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Event Player.CPchange[1] == True;
		Event Player.TCDdetect == False;
		Event Player.Fail == False;
		Is True For Any(Event Player.TCDpos,
			Current Array Element && !Event Player.TCDFdisplay[Current Array Index] && !Event Player.TCDFdisplay[Current Array Index + 3] && (
			Distance Between(Position Of(Event Player) + Vector(False, 0.450, False),
			Event Player.TCDeff[Current Array Index] ? Current Array Element * Vector(True, False, True) + Vector(False, Max(
			Y Component Of(Position Of(Event Player)), Y Component Of(Current Array Element)), False) : Current Array Element)
			< Event Player.TCDradD[Current Array Index] || Distance Between(Position Of(Event Player) + Vector(False, 1.250, False),
			Current Array Element) < Event Player.TCDradD[Current Array Index])) == True;
	}

	actions
	{
		Event Player.TCDdetect = Index Of Array Value(Event Player.TCDpos, Filtered Array(Event Player.TCDpos,
			Current Array Element && !Event Player.TCDFdisplay[Current Array Index] && !Event Player.TCDFdisplay[Current Array Index + 3] && (
			Distance Between(Position Of(Event Player) + Vector(False, 0.450, False),
			Event Player.TCDeff[Current Array Index] ? Current Array Element * Vector(True, False, True) + Vector(False, Max(
			Y Component Of(Current Array Element), Y Component Of(Position Of(Event Player))), False) : Current Array Element)
			<= Event Player.TCDrad[Current Array Index] + 1.450 || Distance Between(Position Of(Event Player) + Vector(False, 1.250,
			False), Current Array Element) <= Event Player.TCDrad[Current Array Index] + 1.450))) + True;
		If(Absolute Value(Event Player.TCDtim[Event Player.TCDdetect - True]) != 9999);
			Play Effect(Event Player, Ring Explosion Sound, Color(White), Event Player, 69);
			If(Event Player.TCDtim[Event Player.TCDdetect - True] < 9900);
				Event Player.TCDFdisplay[Event Player.TCDdetect - True] = True;
				Event Player.TCDFdisplay[6] = (Event Player.TCDFdisplay[False] ? Event Player.TCDtim[False] : False) + (
					Event Player.TCDFdisplay[True] ? Event Player.TCDtim[True] : False) + (
					Event Player.TCDFdisplay[2] ? Event Player.TCDtim[2] : False);
			Else;
				Event Player.TCDFdisplay[Event Player.TCDdetect + 2] = True;
				Set Secondary Fire Enabled(Event Player, Event Player.TCDtim[Event Player.TCDdetect - True] % 2 ? True : False);
				Set Ability 1 Enabled(Event Player, Event Player.TCDtim[Event Player.TCDdetect - True] % 3 ? True : False);
				Set Ability 2 Enabled(Event Player, Event Player.TCDtim[Event Player.TCDdetect - True] % 5 ? True : False);
			End;
			If(Array Contains(Event Player.Lock, True));
				"2 Orb"
				If(Y Component Of(Global.orbHintArray[Event Player.Checkpoint]) == True);
					"Allow if in order"
					If(Global.TCDpos[Event Player.Checkpoint] && Absolute Value(X Component Of(Global.TCD[Event Player.Checkpoint]))
						!= 9999 ? Event Player.TCDFdisplay[False] || Event Player.TCDFdisplay[3] : True);
						If(Global.TCD2pos[Event Player.Checkpoint] && Absolute Value(Z Component Of(Global.TCD[Event Player.Checkpoint]))
							!= 9999 ? Event Player.TCDFdisplay[1] || Event Player.TCDFdisplay[4] : True);
							Event Player.Lock = False;
						End;
					"If arrive at TCD2pos / Z Component of TCD, deny"
					Else If(Global.TCD2pos[Event Player.Checkpoint] && Absolute Value(Z Component Of(Global.TCD[Event Player.Checkpoint]))
							!= 9999 ? Event Player.TCDFdisplay[1] || Event Player.TCDFdisplay[4] : True);
						Call Subroutine(CPfail);
					End;
				"3 Orb"
				Else If(Z Component Of(Global.orbHintArray[Event Player.Checkpoint]) == True);
					"Allow if in order"
					If(Global.TCDpos[Event Player.Checkpoint] && Absolute Value(X Component Of(Global.TCD[Event Player.Checkpoint]))
						!= 9999 ? Event Player.TCDFdisplay[False] || Event Player.TCDFdisplay[3] : True);
						If(Global.TCD3pos[Event Player.Checkpoint] && Absolute Value(Y Component Of(Global.TCD2[Event Player.Checkpoint]))
							!= 9999 ? Event Player.TCDFdisplay[2] || Event Player.TCDFdisplay[5] : True);
							If(Global.TCD2pos[Event Player.Checkpoint] && Absolute Value(Z Component Of(Global.TCD[Event Player.Checkpoint]))
								!= 9999 ? Event Player.TCDFdisplay[1] || Event Player.TCDFdisplay[4] : True);
								Event Player.Lock = False;
							End;
						"Checks 1->3 Orb order"
						Else If(Global.TCD2pos[Event Player.Checkpoint] && Absolute Value(Z Component Of(Global.TCD[Event Player.Checkpoint]))
								!= 9999 ? Event Player.TCDFdisplay[1] || Event Player.TCDFdisplay[4] : True);
							Call Subroutine(CPfail);
						End;
					"If arrive at TCD2pos / Z Component of TCD, deny"
					Else If(Global.TCD2pos[Event Player.Checkpoint] && Absolute Value(Z Component Of(Global.TCD[Event Player.Checkpoint]))
							!= 9999 ? Event Player.TCDFdisplay[1] || Event Player.TCDFdisplay[4] : True);
						Call Subroutine(CPfail);
					"If arrive at TCD3pos / Y Component of TCD2, deny"
					Else If(Global.TCD3pos[Event Player.Checkpoint] && Absolute Value(Y Component Of(Global.TCD2[Event Player.Checkpoint]))
							!= 9999 ? Event Player.TCDFdisplay[2] || Event Player.TCDFdisplay[5] : True);
						Call Subroutine(CPfail);
					End;
				"Unmarked, vanilla orbs"
				Else;
					If((Global.TCDpos[Event Player.Checkpoint] && Absolute Value(X Component Of(Global.TCD[Event Player.Checkpoint]))
						!= 9999 ? Event Player.TCDFdisplay[False] || Event Player.TCDFdisplay[3] : True) && (
						Global.TCD2pos[Event Player.Checkpoint] && Absolute Value(Z Component Of(Global.TCD[Event Player.Checkpoint]))
						!= 9999 ? Event Player.TCDFdisplay[1] || Event Player.TCDFdisplay[4] : True) && (
						Global.TCD3pos[Event Player.Checkpoint] && Absolute Value(Y Component Of(Global.TCD2[Event Player.Checkpoint]))
						!= 9999 ? Event Player.TCDFdisplay[2] || Event Player.TCDFdisplay[5] : True));
						Event Player.Lock = False;
					End;
				End;
			End;
		Else;
			If(Event Player.TCDtim[Event Player.TCDdetect - True] < False);
				Play Effect(Event Player, Ring Explosion Sound, Color(White), Event Player, 69);
				Disable Movement Collision With Environment(Event Player, True);
				While(Is True For Any(Event Player.TCDpos,
					Current Array Element && !Event Player.TCDFdisplay[Current Array Index] && !Event Player.TCDFdisplay[Current Array Index + 3] && (
					Distance Between(Position Of(Event Player) + Vector(False, 0.450, False),
					Event Player.TCDeff[Current Array Index] ? Current Array Element * Vector(True, False, True) + Vector(False, Max(
					Y Component Of(Position Of(Event Player)), Y Component Of(Current Array Element)), False) : Current Array Element)
					< Event Player.TCDradD[Current Array Index] || Distance Between(Position Of(Event Player) + Vector(False, 1.250, False),
					Current Array Element) < Event Player.TCDradD[Current Array Index])));
					Wait(0.016, Ignore Condition);
				End;
				Enable Movement Collision With Environment(Event Player);
			Else;
				Call Subroutine(CPfail);
			End;
		End;
		Event Player.TCDdetect = False;
		Loop If Condition Is True;
	}
}

rule("Ordered Orb Text for KNEAT --------------------- Hint / Force Orb Order Mod")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	actions
	{
		Create In-World Text(Event Player, !Event Player.TCDFdisplay[3] == True && (Y Component Of(
			Global.orbHintArray[Event Player.Checkpoint]) || Z Component Of(Global.orbHintArray[Event Player.Checkpoint]))
			== True ? Custom String("1") : Custom String(""), Global.TCDpos[Event Player.Checkpoint] + Vector(0, 0.500, 0), 1.500,
			Clip Against Surfaces, Visible To Position and String, Global.LvlColors[Event Player.Level], Default Visibility);
		Create In-World Text(Event Player, !Event Player.TCDFdisplay[4] == True && (Y Component Of(
			Global.orbHintArray[Event Player.Checkpoint]) || Z Component Of(Global.orbHintArray[Event Player.Checkpoint])) == True ? (
			Global.TCD3pos[Event Player.Checkpoint] ? Custom String("3") : Custom String("2")) : Custom String(""),
			Global.TCD2pos[Event Player.Checkpoint] + Vector(0, 0.500, 0), 1.500, Clip Against Surfaces, Visible To Position and String,
			Global.LvlColors[Event Player.Level], Default Visibility);
		Create In-World Text(Event Player, !Event Player.TCDFdisplay[5] == True && (Y Component Of(
			Global.orbHintArray[Event Player.Checkpoint]) || Z Component Of(Global.orbHintArray[Event Player.Checkpoint])) == True ? (
			Global.TCD2pos[Event Player.Checkpoint] ? Custom String("2") : Custom String("3")) : Custom String(""),
			Global.TCD3pos[Event Player.Checkpoint] + Vector(0, 0.500, 0), 1.500, Clip Against Surfaces, Visible To Position and String,
			Global.LvlColors[Event Player.Level], Default Visibility);
	}
}

disabled rule("README ----------------------------------------------- Data Corrector  --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Global;
	}

	actions
	{
        "1. Enable the SETUP and Data Corrector Rules below.\n2. In the LevelLengths array, add entries containing the amount of checkpoints in each level (in order, and including the deleted level). Leave the first entry as 1."
		disabled Continue;
		"3. Set the deletedLevel variable to the level that was deleted.\r\n4. Set the dataCorrector variable True.\r\n5. Restart the lobby, and open the Workshop Inspector.\r\n6. Copy the Global variables (drop down menu) by pressing the (x) button."
        disabled Abort;
		"7. Save the new Global variables and replace the Hint / Orb data arrays with the new Hint / Orb data arrays from your clipboard. This is the same process as saving Hint / Orb data arrays for the first time."
		disabled Break;
		"8. Disable the *Data Corrector* rules when you have finished!\r\n9. Restart the lobby and save."
		disabled Continue;
		
	}
}

disabled rule("SETUP - ADD LEVEL LENGTHS HERE ----- Data Corrector  --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	actions
	{
		"EDIT --- Add level lengths, keeping index 0 the same. Replace Null with level 1."
		Event Player.LevelLengths = Array(1, Null);
		"EDIT --- Set this variable to the level number that was deleted."
		Event Player.deletedLevel = 0;
		"EDIT --- Set this variable to True when you need to correct data."
		Event Player.dataCorrector = False;
	}
}

disabled rule("Data Corrector - DO NOT EDIT ---------------- Data Corrector  --- DISABLE AFTER USING!!")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Event Player.dataCorrector == True;
	}

	actions
	{
		"Copys Global vars to Player Vars"
		Event Player.orbHintArrayCopy = Mapped Array(Global.orbHintArray, Current Array Element);
		Event Player.hintStringsArrayCopy = Mapped Array(Global.hintStringsArray, Current Array Element);
		"Reset Global vars"
		Global.orbHintArray = Array();
		Global.hintStringsArray = Array();
		"Create checkpoint starting locations for each level, Event Player.LevelCheckpoints"
		For Global Variable(tempIterator, 0, Count Of(Event Player.LevelLengths), 1);
			Event Player.LevelCheckpoints[Global.tempIterator] = Global.tempIterator == 0 ? 1 : Event Player.LevelLengths[Global.tempIterator] - 1 + Event Player.LevelCheckpoints[Global.tempIterator - 1];
			Wait(0.016, Ignore Condition);
		End;
		"Iterate through old data(as Player var), appending correct indices to Global var"
		For Global Variable(tempIterator, 0, Count Of(Event Player.orbHintArrayCopy), 1);
			If(
				Global.tempIterator <= Event Player.LevelCheckpoints[Event Player.deletedLevel - 1] || Global.tempIterator > Event Player.LevelCheckpoints[Event Player.deletedLevel]);
				Modify Global Variable(orbHintArray, Append To Array, Event Player.orbHintArrayCopy[Global.tempIterator]);
				Modify Global Variable(hintStringsArray, Append To Array, Event Player.hintStringsArrayCopy[Global.tempIterator]);
			End;
			Wait(0.016, Ignore Condition);
		End;
	}
}

rule("Paste Orb / Hint Data Here ----------------------- Hint / Force Orb Order Mod")
{
	event
	{
		Ongoing - Global;
	}
}
```
