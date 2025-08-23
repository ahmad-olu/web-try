import { CollectionConfig } from "payload";

export const ShippingMethods: CollectionConfig = {
    slug: 'shipping-methods',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'price',
            type: 'number',
            required: true,
        },
        {
            name: 'estimatedDays',
            type: 'number',
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
            ],
            defaultValue: 'active',
        },
        {
            name: 'zones',
            type: 'array',
            fields: [
                {
                    name: 'country',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'states',
                    type: 'array',
                    fields: [
                        {
                            name: 'state',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
    ]
}