import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    typescript: true,
    react: true,
    astro: true,
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
      semi: false,
    },
  },
  ...tailwind.configs[
    'flat/recommended'
  ],
)
