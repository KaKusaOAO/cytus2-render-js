(_ => {
    if(!_.dat) return;
    if(_.hasSetupDebugger) return;
    _.hasSetupDebugger = true;
    
    var gui = new dat.GUI();
    
    var basics = gui.addFolder("邦邦 (Bandori) 模式");
    basics.add(currentGame, "bandoriMode").name("啟用").listen();
    basics.add(currentGame, "bandoriSpeed", 1, 11).step(0.5).name("降落速度").listen();

    var appearance = gui.addFolder("外觀設定");
    appearance.add(currentGame, "noteSize", 50, 200).name("物件大小").listen();
    appearance.add(currentGame, "noteFadeInTime", 0, 10000).name("物件淡入時長").listen();
    appearance.add(currentGame, "noteFadeOutTime", 0, 10000).name("物件淡出時長").listen();
    appearance.add(currentGame, "mirrored").name("左右翻轉").listen();
    appearance.add(currentGame, "yFlip").name("上下翻轉").listen();

    var audio = gui.addFolder("聲音設定");
    audio.add(currentGame, "globalOffset", -100, 100).name("聲音延遲").listen();
    audio.add(currentGame, "enableClickSound").name("啟用點擊音效").listen();
})(window);
