import type { Config } from '@jest/types'
// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		global: {
			lines: 80,
			branches: 80,
			functions: 80,
			statements: 80,
		},
	},
	coveragePathIgnorePatterns: [
		'.model.ts',
		'/scripts',
		'/database',
		'/routes',
		'index.ts',
		'startup.ts',
		'.json',
	],
	modulePathIgnorePatterns: [
		'/dist',
		'/node_modules',
		'/database',
		'/routes',
		'/scripts',
	],
}
export default config
