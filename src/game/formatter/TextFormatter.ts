import { Logger } from '@/Logger';

export class TextFormatter {
    private static readonly TEMPLATE_REGEXP = /\@\{(\w+)\}/g;
    private static readonly FALLBACK_VALUE = '...';

    private definedVariableNames: Record<string, string>;
    private logger: Logger;

    constructor(definedVariableNames: Record<string, string>, logger: Logger) {
        this.definedVariableNames = definedVariableNames;
        this.logger = logger;
    }

    private replaceTemplateToText = function(template: string, variableName: string): string {
        const storedValue = this.definedVariableNames[variableName];
        if (!storedValue) {
            this.logger.warn(`could not replace template ${template}, as there is no stored value for it`);
            return TextFormatter.FALLBACK_VALUE;
        } else {
            return storedValue;
        }
    }.bind(this);

    public formatTemplateText(text: string): string {
        return text.replace(TextFormatter.TEMPLATE_REGEXP, this.replaceTemplateToText);
    }
}
