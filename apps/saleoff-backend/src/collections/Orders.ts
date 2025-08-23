import { CollectionConfig } from "payload";

export const Orders: CollectionConfig = {
    slug: 'orders',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'orderNumber',
    },
    fields: [
        {
            name: 'orderNumber',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'customer',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Processing', value: 'processing' },
                { label: 'Shipped', value: 'shipped' },
                { label: 'Delivered', value: 'delivered' },
                { label: 'Cancelled', value: 'cancelled' },
                { label: 'Refunded', value: 'refunded' },
            ],
            defaultValue: 'pending',
            required: true,
        },
        {
            name: 'items',
            type: 'array',
            required: true,
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
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'quantity',
                    type: 'number',
                    required: true,
                    min: 1,
                },
                {
                    name: 'unitPrice',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'totalPrice',
                    type: 'number',
                    required: true,
                },
            ],
        },
        {
            name: 'shippingAddress',
            type: 'group',
            fields: [
                {
                    name: 'firstName',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'lastName',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'company',
                    type: 'text',
                },
                {
                    name: 'address1',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'address2',
                    type: 'text',
                },
                {
                    name: 'city',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'state',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'postalCode',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'country',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'phone',
                    type: 'text',
                },
            ],
        },
        {
            name: 'billingAddress',
            type: 'group',
            fields: [
                {
                    name: 'firstName',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'lastName',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'company',
                    type: 'text',
                },
                {
                    name: 'address1',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'address2',
                    type: 'text',
                },
                {
                    name: 'city',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'state',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'postalCode',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'country',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'phone',
                    type: 'text',
                },
            ],
        },
        {
            name: 'totals',
            type: 'group',
            fields: [
                {
                    name: 'subtotal',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'tax',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'shipping',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'discount',
                    type: 'number',
                    defaultValue: 0,
                },
                {
                    name: 'total',
                    type: 'number',
                    required: true,
                },
            ],
        },
        {
            name: 'shippingMethod',
            type: 'relationship',
            relationTo: 'shipping-methods',
        },
        {
            name: 'paymentMethod',
            type: 'select',
            options: [
                { label: 'Credit Card', value: 'credit_card' },
                { label: 'PayPal', value: 'paypal' },
                { label: 'Bank Transfer', value: 'bank_transfer' },
            ],
        },
        {
            name: 'paymentStatus',
            type: 'select',
            options: [
                { label: 'Pending', value: 'pending' },
                { label: 'Paid', value: 'paid' },
                { label: 'Failed', value: 'failed' },
                { label: 'Refunded', value: 'refunded' },
            ],
            defaultValue: 'pending',
        },
        {
            name: 'notes',
            type: 'textarea',
        },
        {
            name: 'trackingNumber',
            type: 'text',
        },
        {
            name: 'coupons',
            type: 'relationship',
            relationTo: 'coupons',
            hasMany: true,
        },
    ],
    hooks: {

        //  beforeCreate: [
        beforeChange: [
            ({ data }) => {
                data.orderNumber = `ORD-${Date.now()}`;
                return data;
            },
        ],

    },

}