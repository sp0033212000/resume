import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            /**
             * jsx attributes/props should be surrounded by the curly braces
             */
            'react/jsx-curly-brace-presence': [
                'error',
                {
                    props: 'always',
                    children: 'always',
                    propElementValues: 'always',
                },
            ],
        },
    },
]

export default eslintConfig
