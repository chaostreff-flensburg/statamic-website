module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './resources/views/*.blade.php',
            './resources/views/**/*.blade.php',
            './resources/views/*.antlers.html',
            './resources/views/**/*.antlers.html',
            './content/**/*.md'
        ]
    },
    important: true,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}
