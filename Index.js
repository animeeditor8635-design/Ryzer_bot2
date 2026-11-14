const { createClient } = require('bedrock-protocol')
function startBot() {
  console.log('Connecting to RyzerMC...')
  const bot = createClient({
    host: 'ryzermc.mcsh.gg',
    port: 19132,
    username: 'Ryzer_KeepAlive',
    offline: true,
    version: '1.21.50'
  })
  bot.on('join', () => {
    console.log('✅ BOT JOINED!')
    setInterval(() => {
      try {
        bot.queue('player_auth_input', {
          pitch: Math.random() * 20,
          yaw: Math.random() * 360,
          position: bot.entity?.position || { x: 0, y: 0, z: 0 },
          move_vector: { x: 0, z: 1 },
          head_yaw: Math.random() * 360,
          input_data: { _value: 0n, is_sneaking: false, is_jumping: true },
          input_mode: 'mouse',
          play_mode: 'normal',
          interaction_model: 'touch',
          gaze: null,
          tick: 0n,
          delta: { x: 0, y: 0, z: 0 }
        })
      } catch (e) {}
    }, 20000)
  })
  bot.on('disconnect', () => setTimeout(startBot, 5000))
  bot.on('close', () => setTimeout(startBot, 5000))
  bot.on('error', () => setTimeout(startBot, 5000))
}
startBot()
