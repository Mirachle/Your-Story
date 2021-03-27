import { TextFormatter } from '../TextFormatter';
import { Logger } from '../../../Logger';

const noop = (..._args: any[]) => {};

class MockLogger implements Logger {
    public warn = jest.fn((_message: string) => {});
    error = noop;
    info = noop;
    log = noop;
    trace = noop;
}

describe('TextFormatter', () => {
    const storedValues = {
        username: 'MiraBela',
        chosenSubject: 'fakanál'
    };

    let unitUnderTest: TextFormatter;
    let mockLogger: MockLogger;

    beforeEach(() => {
        mockLogger = new MockLogger();
        unitUnderTest = new TextFormatter(storedValues, mockLogger);
    });

    it('should do nothing with templateless text ', () => {
        const templatelessText = 'Hello, Athem vagyok!';
        const actualValue = unitUnderTest.formatTemplateText(templatelessText);
        expect(actualValue).toEqual(templatelessText);
        expect(mockLogger.warn).not.toHaveBeenCalled();
    });

    it('should replace one templatePart with proper value', () => {
        const oneTemplatePartText = `Szia, @{username} vagyok`;
        const actualValue = unitUnderTest.formatTemplateText(oneTemplatePartText);
        expect(actualValue).toEqual(`Szia, MiraBela vagyok`);
        expect(mockLogger.warn).not.toHaveBeenCalled();
    });

    it('should replace two templateParts with proper values', () => {
        const twoTemplatePartText = `@{username} azt mondta, hogy nincs nálad @{chosenSubject}`;
        const actualValue = unitUnderTest.formatTemplateText(twoTemplatePartText);
        expect(actualValue).toEqual(`MiraBela azt mondta, hogy nincs nálad fakanál`);
        expect(mockLogger.warn).not.toHaveBeenCalled();
    });

    it('should replace templatePart with fallback value and log lack of value', () => {
        const templatePartText = `Nem találom a @{notFoundSubject}-ot`;
        const actualValue = unitUnderTest.formatTemplateText(templatePartText);
        expect(actualValue).toEqual(`Nem találom a ...-ot`);
        expect(mockLogger.warn).toHaveBeenCalled();
    });
});