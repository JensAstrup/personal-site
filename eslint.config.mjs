import yenz from 'eslint-config-yenz'

export default [
  {
    ignores: [
      '.next/**',
      '.yarn/**',
      'node_modules/**',
      'out/**',
      'dist/**',
      'coverage/**',
      '.history/**',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...yenz,
  },
]
