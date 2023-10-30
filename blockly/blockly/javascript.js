Blockly.JavaScript['fiveblockly'] = function(block) {
  // TODO: Assemble javascript into code variable.
  var code = 'Blockly.Arduino['fiveblockly'] = function(block) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "uuid": "00000000",
      "address": "0xE5b3c06873D4C2da2598b67535331A12a0cCc3f4",
      "image": "https://i.imgur.com/TAk6Umn.jpg",
      "description": "a star",
      "name": "star",
      "attributes": [
        {
          "trait_type": "star",
          "value": "50"
        },
        {
          "trait_type": "date",
          "value": "2023513"
        },
        {
          "trait_type": "try",
          "value": "50"
        }
      ]
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://beta-nft.townway.com.tw/mint_with_metadata", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
    };\n';
  return code;
};