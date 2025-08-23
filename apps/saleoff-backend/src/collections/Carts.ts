import { CollectionConfig } from "payload";

export const Carts: CollectionConfig = {
    slug: 'carts',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
        },
        {
            name: 'sessionId',
            type: 'text',
        },
        {
            name: 'items',
            type: 'array',
            fields: [
                {
                    name: 'product',
                    type: 'relationship',
                    relationTo: 'products',
                    required: true,
                },
                {
                    name: 'variant',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'quantity',
                    type: 'number',
                    required: true,
                    min: 1,
                },
            ],
        },
        {
            name: 'expiresAt',
            type: 'date',
        },
    ]
}