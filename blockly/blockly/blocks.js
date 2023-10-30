Blockly.Blocks['threeblockly'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("神奇積木");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};