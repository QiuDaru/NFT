Blockly.Blocks['threeblockly'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("求王爺讓我這個積木一次過");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};