import { Before } from 'cucumber';
import { DOMWindow, JSDOM } from 'jsdom';

const parsedGlobal = (global as unknown) as {
    window: DOMWindow;
    document: Document;
    navigator: Navigator;
};

Before(() => {
    const testingDocument = new JSDOM(`
    <!doctype html>
    <html>
        <head></head>
        <body></body>
    </html>`);

    parsedGlobal.window = testingDocument.window;
    parsedGlobal.document = testingDocument.window.document;
    parsedGlobal.navigator = testingDocument.window.navigator;
});
