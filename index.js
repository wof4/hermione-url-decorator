const URI = requaire('urijs')


module.exports = (hermione, opts) => {
    hermione.on(hermione.events.NEW_BROWSER, (browser) => {
        browser.overwriteComand('url', (origUrlFn, uri) => {
            uri = uri
                ? new URI(uri).addQuery(opts.query).toString()
                : uri;
            return origUrlFn(uri);
        })
    })
}