
export async function initializeRuntime(config) {
  return {
    async bootstrap() {
      console.log('Initializing Camlcode Runtime')
      console.log(config)
    }
  }
}
