import { DOMWindow, JSDOM } from 'jsdom';

const testingDocument = new JSDOM(`
<!doctype html>
<html>
    <head></head>
    <body></body>
</html>`);

const parsedGlobal = (global as unknown) as {
    window: DOMWindow;
    document: Document;
    navigator: Navigator;
};

parsedGlobal.window = testingDocument.window;
parsedGlobal.document = testingDocument.window.document;
parsedGlobal.navigator = testingDocument.window.navigator;
