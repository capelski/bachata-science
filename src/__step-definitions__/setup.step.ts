import { Before } from 'cucumber';
import { DOMWindow, JSDOM } from 'jsdom';

const parsedGlobal = (global as unknown) as {
    window: DOMWindow;
    document: Document;
    navigator: Navigator;
};

const mockDocument = () => {
    const testingDocument = new JSDOM(`
        <!doctype html>
        <html>
            <head></head>
            <body></body>
        </html>`);

    parsedGlobal.window = testingDocument.window;
    parsedGlobal.document = testingDocument.window.document;
    parsedGlobal.navigator = testingDocument.window.navigator;
};

// Cucumber fails to run all tests if the global document is not initialized here,
// before start running any scenario
mockDocument();

Before(mockDocument);
