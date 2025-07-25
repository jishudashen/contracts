// Plugin dependencies
import 'hardhat-secure-accounts'
// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
import './type-extensions'

import { extendConfig, extendEnvironment } from 'hardhat/config'

import { greExtendConfig, greExtendEnvironment } from './gre'

// ** Graph Runtime Environment (GRE) extensions for the HRE **
extendConfig(greExtendConfig)
extendEnvironment(greExtendEnvironment)

// Exports
export { getGREOptsFromArgv } from './helpers/argv'
export { greTask as greTask } from './task'
export * from './types'
