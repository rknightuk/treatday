module.exports = function(eleventyConfig) {
    // passthrough
    ['src/assets', 'src/files'].forEach(path =>
        eleventyConfig.addPassthroughCopy(path)
    )

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'public'
        }
    }
}
