function showPanel(panelId){
    var panel = document.getElementById(panelId);
    /* Toggle between hiding and showing the active panel */
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}