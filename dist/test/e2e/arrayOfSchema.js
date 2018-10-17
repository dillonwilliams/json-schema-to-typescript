"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    id: 'Countries',
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                minLength: 2,
                maxLength: 2,
                pattern: '[A-Z]+'
            },
            name: {
                type: 'string'
            }
        },
        required: ['id', 'name']
    }
};
//# sourceMappingURL=arrayOfSchema.js.map