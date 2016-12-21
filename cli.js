const Health = require('./')
const pretty = require('pretty-bytes')

var key = process.argv.slice(2)[0] || '587db7de5a030b9b91ddcb1882cf0e4b67b4609568997eee0d4dfe74ce31d198'
console.log('Watching', key)
var health = Health(key)
health.on('change', function (data) {
  console.log('Size: ' + pretty(data.bytes))
  for (var i = 0; i < data.peers.length; i++) {
    var peer = data.peers[i]
    console.log('Peer ' + (i+1) + ': ' + peer.have + '/' + peer.blocks)
  }
  if (!data.peers.length) console.log('No peers.')
})