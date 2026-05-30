
import { initializeRuntime } from './semantic-runtime/loader/camlcode-loader.mjs'

const runtime = await initializeRuntime({
  runtimeClass: 'continuity-native-semantic-runtime'
})

await runtime.bootstrap()
