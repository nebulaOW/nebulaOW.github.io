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
1. Copy the contents of the applicable map .txt file from the [Maps](../../repos/MrDestructoData/Maps/) folder or from the list below.
- [Ayutthaya](repos/MrDestructoData/Maps/Ayutthaya.ow)
- [Black Forest](repos/MrDestructoData/Maps/BlackForest.ow)
- [Blizzard World](repos/MrDestructoData/Maps/BlizzardWorld.ow)
- [Busan](repos/MrDestructoData/Maps/Busan.ow)
- [Castillo](repos/MrDestructoData/Maps/Castillo.ow)
- [Chateau Guillard](repos/MrDestructoData/Maps/ChateauGuillard.ow)
- [Dorado](repos/MrDestructoData/Maps/Dorado.ow)
- [Eichenwald](repos/MrDestructoData/Maps/Eichenwald.ow)
- [Hanamura](repos/MrDestructoData/Maps/Hanamura.ow)
- [Havana](repos/MrDestructoData/Maps/Havana.ow)
- [Hollywood](repos/MrDestructoData/Maps/Hollywood.ow)
- [Horizon Lunar Colony](repos/MrDestructoData/Maps/HorizonLunarColony.ow)
- [Ilios](repos/MrDestructoData/Maps/Ilios.ow)
- [Junkertown](repos/MrDestructoData/Maps/Junkertown.ow)
- [Lijiang Tower](repos/MrDestructoData/Maps/LijiangTower.ow)
- [Necropolis](repos/MrDestructoData/Maps/Necropolis.ow)
- [Nepal](repos/MrDestructoData/Maps/Nepal.ow)
- [Numbani](repos/MrDestructoData/Maps/Numbani.ow)
- [Oasis](repos/MrDestructoData/Maps/Oasis.ow)
- [Paris](repos/MrDestructoData/Maps/Paris.ow)
- [Rialto](repos/MrDestructoData/Maps/Rialto.ow)
- [Route 66](repos/MrDestructoData/Maps/Route66.ow)
- [Temple of Anubis](repos/MrDestructoData/Maps/TempleOfAnubis.ow)
- [Volskaya Industries](repos/MrDestructoData/Maps/VolskayaIndustries.ow)
- [Watchpoint: Gibraltar](repos/MrDestructoData/Maps/WatchpointGibraltar.ow)
- [Empty Map (For future maps)](repos/MrDestructoData/Maps/EmptyMap.ow)

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
