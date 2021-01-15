---
title: "Mr. Destructo Map Data"
date: 2021-01-15T09:49:30-06:00
categories:
  - Tools
tags:
  - Map Data
  - Mr Destructo
  - Reaper
  - Bot
  - Break fences
---

# Map Data for MrDestructo
I found the code for MrDestructo on a map made in the DiaZ/AOD framework.   
**Credit goes to Janni for creating MrDestructo** and to whoever put together Rialto and Hollywood.
I decided to create map data for each map. I've included the entire subroutine.  
I know for sure this will work with Hax Framework.  

Not included as there is nothing really breakable:  
- King's Row
- Ecopoint: Antartica
- Petra

## INSTALLATION:
1. Copy the contents of the applicable map .txt file from the [Maps](/Maps/) folder or from the list below.
- [Ayutthaya](/Maps/Ayutthaya.ow)
- [Black Forest](/Maps/BlackForest.ow)
- [Blizzard World](/Maps/BlizzardWorld.ow)
- [Busan](/Maps/Busan.ow)
- [Castillo](/Maps/Castillo.ow)
- [Chateau Guillard](/Maps/ChateauGuillard.ow)
- [Dorado](/Maps/Dorado.ow)
- [Eichenwald](/Maps/Eichenwald.ow)
- [Hanamura](/Maps/Hanamura.ow)
- [Havana](/Maps/Havana.ow)
- [Hollywood](/Maps/Hollywood.ow)
- [Horizon Lunar Colony](/Maps/HorizonLunarColony.ow)
- [Ilios](/Maps/Ilios.ow)
- [Junkertown](/Maps/Junkertown.ow)
- [Lijiang Tower](/Maps/LijiangTower.ow)
- [Necropolis](/Maps/Necropolis.ow)
- [Nepal](/Maps/Nepal.ow)
- [Numbani](/Maps/Numbani.ow)
- [Oasis](/Maps/Oasis.ow)
- [Paris](/Maps/Paris.ow)
- [Rialto](/Maps/Rialto.ow)
- [Route 66](/Maps/Route66.ow)
- [Temple of Anubis](/Maps/TempleOfAnubis.ow)
- [Volskaya Industries](/Maps/VolskayaIndustries.ow)
- [Watchpoint: Gibraltar](/Maps/WatchpointGibraltar.ow)
- [Empty Map (For future maps)](/Maps/EmptyMap.ow)

2. In Workshop, a yellow button will appear at the top. Click that button to paste the contents that you copied in step one.  

3. Paste the entire condition statement to the Hax Framework rule named *Player Joins, Current CP Color* using the yellow button that appears in the *conditions* section of the rule.  
Be sure to copy from the word *conditions* to the closing curly brace *}*.  
This condition allows Mr. Destructo to do his work without getting teleported back to Level Select.
```
conditions
{
    Is Dummy Bot(Event Player) == False;
}
```
