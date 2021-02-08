console.log('Starting ddos attack')

function ddos(webiste) {
  webiste = 'riverside.rocks'
  console.log(`Packet sent to ${webiste}`)
}

setInterval(ddos, 0);

process.on('SIGINT', function() {
  console.log('Stopping ddos attack.');
});