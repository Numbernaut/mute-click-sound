(function() {
    console.log("MuteClickSound mod loaded!");
    Game.playCookieClickSound = function() { return };
    Game.Popup('MuteClickSound loaded!');
})();
