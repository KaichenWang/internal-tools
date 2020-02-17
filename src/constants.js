
const constants = {
    utilities: {
        '1': {
            path: '/remove-unreferenced-strings',
            title: 'Find unreferenced locale strings',
            description: 'This utility verifies if any strings in a locale file (e.g.en.json) are unreferenced in schema.json'
        },
        '2': {
            path: '/remap-translations',
            title: 'Remap translation strings',
            description: 'This utility remaps locale files to a new structure'
        },
        '3': {
            path: '/extract-links',
            title: 'Extract links',
            description: 'This utility extracts links from a block of text'
        }
    },
    locales: [
        'da',
        'de',
        'en',
        'es',
        'fi',
        'fr',
        'hi',
        'it',
        'ja',
        'ko',
        'ms',
        'nb',
        'nl',
        'pt-BR',
        'pt-PT',
        'sv',
        'th',
        'zh-CN',
        'zh-TW'
    ]
}

export default constants;