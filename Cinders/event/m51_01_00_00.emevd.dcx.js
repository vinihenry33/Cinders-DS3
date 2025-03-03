// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    InitializeCommonEvent(20005500, 15110800, 15110000, 5110950, 5111950);
    RegisterBonfire(15110001, 5111951, 5, 180, 0);
    InitializeEvent(0, 15115800, 0);
    InitializeEvent(0, 15115810, 0);
    InitializeEvent(0, 15115811, 0);
    InitializeEvent(0, 15115812, 0);
    InitializeEvent(0, 15115847, 0);
    InitializeEvent(0, 15115849, 0);
    InitializeCommonEvent(20005840, 5111800);
    InitializeCommonEvent(20005841, 5111800);
    InitializeEvent(0, 15115850, 0);
    InitializeEvent(0, 15115860, 0);
    InitializeEvent(0, 15115889, 0);
    InitializeCommonEvent(20005840, 5111850);
    InitializeCommonEvent(20005841, 5111850);
    InitializeEvent(0, 15115890, 0);
    InitializeEvent(0, 15115201, 0);
    InitializeCommonEvent(20005110, 5110300, 5112800);
    InitializeEvent(0, 15115300, 0);
    InitializeCommonEvent(20005351, 5110240, 62600240, 55110981, 1073741824);
    InitializeEvent(0, 15115891, 0);
    InitializeCommonEvent(20006002, 5110850, 1838, 1835, 1839);
    InitializeCommonEvent(20006031, 75110180, 5112801);
    InitializeEvent(0, 15115050, 0); // Cinders Scripts
});

Event(50, Default, function() {
    SetMapSoundState(5114801, Disabled);
    SetMapSoundState(5114802, Disabled);
    SetMapSoundState(5114803, Disabled);
    InitializeEvent(0, 15115200, 0);
    InitializeEvent(0, 15115100, 0);
    InitializeEvent(0, 15115050, 0); // Cinders Scripts
});

// Cinders Setup
Event(15115050, Restart, function() {
    // NG+ Rings
    InitializeCommonEvent(20008000, 5110500, 1); // Skull Ring+1
    InitializeCommonEvent(20008000, 5110501, 2); // Skull Ring+2
    InitializeCommonEvent(20008000, 5110502, 3); // Skull Ring+3
});

Event(15115100, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    SetCurrentMapCeremony(0);
});

Event(15115200, Restart, function() {
    SetCharacterGravity(5110200, Disabled);
    SetCharacterMaphit(5110200, true);
});

Event(15115201, Restart, function() {
    IfCharacterBackreadStatus(MAIN, 5110200, true, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(5110200, 30000, true, false, true, 0, 1);
});

Event(15115300, Restart, function() {
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15110801);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 15110300);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    ChangeCharacterEnableState(5110300, Disabled);
    SetCharacterBackreadState(5110300, true);
    SetCharacterAnimationState(5110300, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterTalkRange(5110300, 100);
    SetEventFlag(75110200, OFF);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 15110800);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 5110300, 5112300, 1);
    IfCharacterDeadalive(OR_01, 5110300, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfCharacterDeadalive(AND_01, 5110300, DeathState.Dead, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_01);
    ForceCharacterDeath(5110300, false);
    SetEventFlag(15110300, ON);
});

// Slave Knight Gael Kill
Event(15115800, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    IfCharacterHPRatio(AND_01, 5110800, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(2.67);
    PlaySE(5110800, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(5110800, TextBannerType.HeirofFireDestroyed);
    DeleteMapSFX(5113820, true);
    DeleteMapSFX(5113821, true);
    DeleteMapSFX(5113822, true);
    DeleteMapSFX(5113823, true);
    SetEventFlag(15110800, ON);
    SetEventFlag(6327, ON);
    SetEventFlag(9327, ON);
    InitializeCommonEvent(20020023, 0);
});

Event(15115810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15110800);
    ChangeCharacterEnableState(5115800, Disabled);
    SetCharacterAnimationState(5115800, Disabled);
    ForceCharacterDeath(5115800, false);
    DeleteMapSFX(5113820, false);
    DeleteMapSFX(5113821, false);
    DeleteMapSFX(5113822, false);
    DeleteMapSFX(5113823, false);
    DeleteMapSFX(5113830, false);
    DeleteMapSFX(5113831, false);
    DeleteMapSFX(5113832, false);
    DeleteMapSFX(5113833, false);
    DeactivateObject(5116820, Disabled);
    DeactivateObject(5116821, Enabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    DeleteMapSFX(5113820, false);
    DeleteMapSFX(5113821, false);
    DeleteMapSFX(5113822, false);
    DeleteMapSFX(5113823, false);
    DeleteMapSFX(5113830, false);
    DeleteMapSFX(5113831, false);
    DeleteMapSFX(5113832, false);
    DeleteMapSFX(5113833, false);
    DeactivateObject(5116820, Enabled);
    DeactivateObject(5116821, Disabled);
    SetCharacterAIState(5115800, Disabled);
    ChangeCharacterEnableState(5110801, Disabled);
    SetCharacterAnimationState(5110801, Disabled);
    SetCharacterAnimationState(5110800, Disabled);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 15110801);
    WarpCharacterAndCopyFloor(5110801, TargetEntityType.Area, 5112804, -1, 5110801);
    DeactivateObject(5111810, Disabled);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_09, false);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 10000, 5110801, 120, 1);
    IfInoutsideArea(AND_09, InsideOutsideState.Inside, 10000, 5112801, 1);
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventFlag, 15115852);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfDamageType(OR_01, 5110801, -1, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.SkippableWithFadeOut, 5112802, 51, 1, 10000);
    SkipUnconditionally(7);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.UnskippableWithFadeOut, 5112802, 51, 1, 10000);
    SkipUnconditionally(4);
    SkipIfPlayerInoutsideArea(2, InsideOutsideState.Inside, 10000, 5112815);
    PlayCutsceneToPlayer(51010005, CutscenePlayMode.Unskippable, 10000);
    SkipUnconditionally(1);
    PlayCutsceneAndWarpPlayer(51010005, CutscenePlayMode.UnskippableWithFadeOut, 5112816, 51, 1, 10000);
    WaitFixedTimeFrames(1);
    GotoUnconditionally(Label.LABEL2);
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15115805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 5112800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    Label2();
    DeactivateObject(5111810, Enabled);
    ChangeCharacterEnableState(5110801, Enabled);
    SetCharacterAnimationState(5110801, Enabled);
    SetCharacterAIState(5110801, Enabled);
    SetNetworkUpdateRate(5110801, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(5110801, 3035, false, false, false, 0, 1);
    CreateReferredDamagePair(5110801, 5110800);
    SetCharacterHPBarDisplay(5110801, Disabled);
    DisplayBossHealthBar(Enabled, 5110800, 0, 906200);
    SetNetworkconnectedEventFlag(15110801, ON);
});

Event(15115811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    IfCharacterHPRatio(OR_01, 5110800, ComparisonType.Less, 0.65, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_01, 5110801, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfMultiplayerState(Label.LABEL1, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.SkippableWithFadeOut, 10, 1, 5112805, 51, 1, 10000);
    GotoUnconditionally(Label.LABEL9);
    Label1();
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL3, true);
    IfCharacterHPValue(AND_02, 10000, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.UnskippableWithFadeOut, 10, 1, 5112805, 51, 1, 10000);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    PlayCutsceneToPlayerAndChangeCurrentMapCeremony(51010010, CutscenePlayMode.UnskippableWithFadeOut, 10, 1, 10000);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    GotoIfPlayerInoutsideArea(Label.LABEL4, InsideOutsideState.Inside, 10000, 5112810);
    IfCharacterHPValue(AND_04, 10000, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL4, PASS, AND_04);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(51010010, CutscenePlayMode.Unskippable, 10, 1, 5112806, 51, 1, 10000);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    PlayCutsceneToPlayerAndChangeCurrentMapCeremony(51010010, CutscenePlayMode.Unskippable, 10, 1, 10000);
    Label9();
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(5110801, Disabled);
    SetCharacterAnimationState(5110801, Disabled);
    WarpCharacterAndCopyFloor(5110800, TargetEntityType.Area, 5112807, -1, 5110800);
    ChangeCharacterEnableState(5110800, Enabled);
    SetCharacterAnimationState(5110800, Enabled);
    SetCharacterAIState(5110800, Enabled);
    SetNetworkUpdateRate(5110800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(5110800, 3037, false, false, false, 0, 1);
    SetEventFlag(15115802, ON);
    DeactivateObject(5116820, Disabled);
    DeactivateObject(5116821, Enabled);
    SpawnMapSFX(5113830);
    SpawnMapSFX(5113831);
    SpawnMapSFX(5113832);
    SpawnMapSFX(5113833);
});

Event(15115812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15115802);
    IfCharacterHasSpeffect(AND_01, 5110800, 16207, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15115803, ON);
    DeleteMapSFX(5113830, true);
    DeleteMapSFX(5113831, true);
    DeleteMapSFX(5113832, true);
    DeleteMapSFX(5113833, true);
    SpawnMapSFX(5113820);
    SpawnMapSFX(5113821);
    SpawnMapSFX(5113822);
    SpawnMapSFX(5113823);
});

Event(15115847, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110800);
    SetSpeffect(10000, 16189);
    WaitFixedTimeSeconds(0.3);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 5112830, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(10000, 16189);
    WaitFixedTimeSeconds(0.3);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 5112830, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    EndUnconditionally(EventEndType.Restart);
});

Event(15115848, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X4_4, Disabled);
    DeleteObjectfollowingSFX(X4_4, true);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfParameterComparison(OR_01, ComparisonType.Equal, X12_4, 0);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X12_4);
    IfParameterComparison(OR_02, ComparisonType.Equal, X12_4, 0);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfMultiplayerState(OR_03, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_03, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(OR_04, PASS, AND_01);
    IfConditionGroup(OR_04, PASS, AND_02);
    IfConditionGroup(OR_04, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_04);
    DeactivateObject(X4_4, Enabled);
    DeleteObjectfollowingSFX(X4_4, true);
    CreateObjectfollowingSFX(X4_4, 101, X8_4);
    IfEventFlag(OR_11, ON, TargetEventFlagType.EventFlag, X12_4);
    IfParameterComparison(OR_11, ComparisonType.Equal, X12_4, 0);
    IfConditionGroup(AND_11, PASS, OR_11);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_11, true);
    IfEventFlag(OR_12, ON, TargetEventFlagType.EventFlag, X12_4);
    IfParameterComparison(OR_12, ComparisonType.Equal, X12_4, 0);
    IfConditionGroup(AND_12, PASS, OR_12);
    IfEventFlag(AND_12, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfMultiplayerState(OR_13, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_13, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_13, PASS, OR_13);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(AND_14, FAIL, AND_11);
    IfConditionGroup(AND_14, FAIL, AND_12);
    IfConditionGroup(AND_14, FAIL, AND_13);
    IfConditionGroup(MAIN, PASS, AND_14);
    EndUnconditionally(EventEndType.Restart);
});

Event(15115849, Restart, function() {
    InitializeCommonEvent(20005800, 15110800, 5111800, 5112800, 15115805, 5111800, 5115800, 15110801, 0);
    InitializeEvent(0, 15115895, 15110800, 5111800, 5112800, 15115805, 5111800, 15115806, 15110801, 0, 5112810);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 15110801);
    InitializeCommonEvent(20001838, 15110800, 15115805, 15115806, 15115810, 5114801, 5114802, 5114803, 15115802, 15115803);
    SkipUnconditionally(1);
    InitializeCommonEvent(20005833, 15110800, 15115805, 15115806, 5112800, 5114801, 5114802, 5114803, 15115802, 15115803);
    InitializeEvent(0, 15115848, 15110800, 5111800, 4, 15110801);
    InitializeCommonEvent(20005810, 15110800, 5111800, 5112800, 10000);
});

Event(15115850, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110850);
    IfCharacterDeadalive(AND_01, 5110850, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15110850, ON);
    SetEventFlag(65100604, ON);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(15115852, OFF);
});

Event(15115860, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 15110850);
    ChangeCharacterEnableState(5110850, Disabled);
    SetCharacterAnimationState(5110850, Disabled);
    ForceCharacterTreasure(5110850);
    SetCharacterBackreadState(5110850, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(15115851, OFF);
    SetEventFlag(15115852, OFF);
    SetCharacterAIState(5110850, Disabled);
    ChangeCharacterEnableState(5110850, Disabled);
    SetCharacterBackreadState(5110850, true);
    SetCharacterAnimationState(5110850, Disabled);
    SetCharacterTalkRange(5110850, 100);
    SetEventFlag(75110150, OFF);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 15115851);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 15110800);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 15110801);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 15110801);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfConditionGroup(OR_03, PASS, AND_04);
    IfConditionGroup(AND_09, PASS, OR_03);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 10000, 5110850, 60, 1);
    IfInoutsideArea(AND_09, InsideOutsideState.Inside, 10000, 5112851, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_09, false);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfDamageType(OR_01, 5102850, -1, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoUnconditionally(Label.LABEL2);
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15115855);
    IfConditionGroup(MAIN, PASS, AND_01);
    Label2();
    SetEventFlag(15115851, ON);
    SetEventFlag(15115852, ON);
    ChangeCharacterEnableState(5110850, Enabled);
    SetCharacterBackreadState(5110850, false);
    SetCharacterAnimationState(5110850, Enabled);
    SetNetworkUpdateRate(5110850, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(5110850);
    SetCharacterAIState(5110850, Enabled);
    ForceAnimationPlayback(5110850, 63010, false, false, false, 0, 1);
    SetEventFlag(15115855, ON);
});

Event(15115861, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110850);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110801);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15115852);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15110801);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(5110850, 91030, false, false, false, 0, 1);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(5110850, Disabled);
    SetCharacterAnimationState(5110850, Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 15110800);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 5112850, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    ChangeCharacterEnableState(5110850, Enabled);
    SetCharacterAnimationState(5110850, Enabled);
    WarpCharacterAndCopyFloor(5110850, TargetEntityType.Area, 5112852, -1, 5110850);
    RequestCharacterAnimationReset(5110850, Interpolation.Interpolated);
    ForceAnimationPlayback(5110850, 63010, false, false, false, 0, 1);
});

Event(15115888, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X4_4, Disabled);
    DeleteObjectfollowingSFX(X4_4, true);
    EndUnconditionally(EventEndType.End);
    IfEventFlag(OR_01, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X24_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X16_4);
    IfParameterComparison(OR_02, ComparisonType.Equal, X16_4, 0);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, X24_4);
    IfParameterComparison(OR_03, ComparisonType.Equal, X24_4, 0);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, X20_4);
    IfMultiplayerState(OR_04, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_04, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_04, PASS, OR_04);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(OR_05, PASS, AND_01);
    IfConditionGroup(OR_05, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_05);
    DeactivateObject(X4_4, Enabled);
    DeleteObjectfollowingSFX(X4_4, true);
    CreateObjectfollowingSFX(X4_4, 101, X8_4);
    IfEventFlag(OR_11, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_11, ON, TargetEventFlagType.EventFlag, X24_4);
    IfConditionGroup(AND_11, PASS, OR_11);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_11, true);
    IfEventFlag(OR_12, ON, TargetEventFlagType.EventFlag, X16_4);
    IfParameterComparison(OR_12, ComparisonType.Equal, X16_4, 0);
    IfConditionGroup(AND_12, PASS, OR_12);
    IfEventFlag(AND_12, OFF, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_13, ON, TargetEventFlagType.EventFlag, X24_4);
    IfParameterComparison(OR_13, ComparisonType.Equal, X24_4, 0);
    IfConditionGroup(AND_13, PASS, OR_13);
    IfEventFlag(AND_13, OFF, TargetEventFlagType.EventFlag, X20_4);
    IfMultiplayerState(OR_14, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_14, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_14, PASS, OR_14);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(AND_15, FAIL, AND_11);
    IfConditionGroup(AND_15, FAIL, AND_12);
    IfConditionGroup(MAIN, PASS, AND_15);
    EndUnconditionally(EventEndType.Restart);
});

Event(15115889, Restart, function() {
    InitializeEvent(0, 15115888, 15110890, 5111850, 2, 15110850, 15115851, 15110800, 15110801);
    InitializeCommonEvent(20005810, 15110890, 5111850, 5112850, 10000);
});

Event(15115890, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 15110890);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15110800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 15110850);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(15110890, ON);
});

Event(15115891, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    ClearSpeffect(10000, 4700);
    IfPlayerInoutMap(MAIN, true, 51, 1);
    SetSpeffect(10000, 4700);
});

Event(15115895, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(X12_4, OFF);
    GotoIfComparison(Label.LABEL0, ComparisonType.Equal, X24_4, 0);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X24_4);
    SkipIfComparison(1, ComparisonType.Equal, X28_4, 0);
    IfInoutsideArea(OR_09, InsideOutsideState.Inside, 10000, X28_4, 1);
    IfEventFlag(OR_09, ON, TargetEventFlagType.EventFlag, X24_4);
    IfConditionGroup(AND_09, PASS, OR_09);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_09, true);
    IfCharacterType(AND_09, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_09);
    IfInoutsideArea(AND_15, InsideOutsideState.Inside, 10000, X32_4, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_15);
    GotoUnconditionally(Label.LABEL1);
    Label0();
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfActionButtonInArea(AND_01, X16_4, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, X8_4, 60060, true);
    IfCharacterType(AND_02, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, X8_4, 1);
    IfElapsedSeconds(OR_01, 3);
    IfConditionGroup(OR_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_02);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, OR_01);
    Label1();
    SetEventFlag(X20_4, ON);
    EndUnconditionally(EventEndType.Restart);
});

Event(15115896, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, false);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfMultiplayerState(OR_01, MultiplayerState.TryingtoCreateSession);
    IfMultiplayerState(OR_01, MultiplayerState.TryingtoJoinSession);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfActionButtonInArea(AND_01, X12_4, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, X8_4, 60060, true);
    EndUnconditionally(EventEndType.Restart);
});

Event(15115700, Default, function() {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1835, 1839);
    BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
    SetNetworkconnectedEventFlag(1835, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1836);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001074);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
    SetNetworkconnectedEventFlag(1835, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1820, 1834);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1820, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1835);
    SkipIfBatchEventFlags(4, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1820, 1822);
    BatchSetNetworkconnectedEventFlags(1820, 1834, OFF);
    SetNetworkconnectedEventFlag(1823, ON);
    BatchSetNetworkconnectedEventFlags(1835, 1839, OFF);
    SetNetworkconnectedEventFlag(1837, ON);
    Label9();
    SetEventFlag(70001074, OFF);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 1838);
    SetEventFlag(75110150, OFF);
    Label10();
});
