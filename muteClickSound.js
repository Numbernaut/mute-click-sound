if (typeof Game !== 'undefined') {
    // Register the mod and ensure compatibility with the current game version
    Game.registerMod("MuteClickSound", {
        init: function () {
            // Overriding the cookie click sound function to do nothing
            Game.playCookieClickSound = function () { return; };

            // Notify that the mod has been loaded
            if (Game.prefs.popups) {
                Game.Popup('MuteClickSound mod loaded!');
            } else {
                Game.Notify('MuteClickSound mod loaded!', '', '', 1, 1);
            }
        }
    });
}
