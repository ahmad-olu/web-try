import { CollectionConfig } from "payload";

export const Coupons: CollectionConfig = {
    slug: 'coupons',
    admin: {
        useAsTitle: 'code',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'code',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'type',
            type: 'select',
            options: [
                { label: 'Percentage', value: 'percentage' },
                { label: 'Fixed Amount', value: 'fixed' },
                { label: 'Free Shipping', value: 'free_shipping' },
            ],
            required: true,
        },
        {
            name: 'value',
            type: 'number',
            required: true,
        },
        {
            name: 'minimumAmount',
            type: 'number',
        },
        {
            name: 'usageLimit',
            type: 'number',
        },
        {
            name: 'usedCount',
            type: 'number',
            defaultValue: 0,
        },
        {
            name: 'validFrom',
            type: 'date',
            required: true,
        },
        {
            name: 'validTo',
            type: 'date',
            required: true,
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
    ]
}