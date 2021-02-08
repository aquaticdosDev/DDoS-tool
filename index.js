const proxy = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

console.log('Starting ddos attack')

function ddos(webiste) {
  webiste = 'riverside.rocks'
  console.log(`Sent Packet from ${proxy} to https://${webiste}`)
}

setInterval(ddos);

process.on('SIGINT', function() {
  console.log('Stopping ddos attack.');
});