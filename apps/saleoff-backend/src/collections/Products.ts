import { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
    slug: 'products',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
        },
        {
            name: 'shortDescription',
            type: 'textarea',
            maxLength: 300,
        },
        {
            name: 'images',
            type: 'array',
            minRows: 1,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'alt',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            required: true,
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true,
        },
        {
            name: 'brand',
            type: 'relationship',
            relationTo: 'brands',
        },
        {
            name: 'variants',
            type: 'array',
            minRows: 1,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'sku',
                    type: 'text',
                    required: true,
                    unique: true,
                },
                {
                    name: 'price',
                    type: 'number',
                    required: true,
                    min: 0,
                },
                {
                    name: 'compareAtPrice',
                    type: 'number',
                    min: 0,
                },
                {
                    name: 'inventory',
                    type: 'group',
                    fields: [
                        {
                            name: 'quantity',
                            type: 'number',
                            required: true,
                            defaultValue: 0,
                        },
                        {
                            name: 'allowBackorder',
                            type: 'checkbox',
                            defaultValue: false,
                        },
                        {
                            name: 'trackQuantity',
                            type: 'checkbox',
                            defaultValue: true,
                        },
                    ],
                },
                {
                    name: 'options',
                    type: 'array',
                    fields: [
                        {
                            name: 'name',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'value',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
                {
                    name: 'weight',
                    type: 'number',
                },
                {
                    name: 'dimensions',
                    type: 'group',
                    fields: [
                        {
                            name: 'length',
                            type: 'number',
                        },
                        {
                            name: 'width',
                            type: 'number',
                        },
                        {
                            name: 'height',
                            type: 'number',
                        },
                    ],
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Active', value: 'active' },
                { label: 'Archived', value: 'archived' },
            ],
            defaultValue: 'draft',
            required: true,
        },
        {
            name: 'seo',
            type: 'group',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'text',
                },
                {
                    name: 'metaDescription',
                    type: 'textarea',
                },
                {
                    name: 'metaImage',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'relatedProducts',
            type: 'relationship',
            relationTo: 'products',
            hasMany: true,
        },
        {
            name: 'vendor',
            type: 'relationship',
            relationTo: 'users',
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
        },
        {
            name: 'rating',
            type: 'group',
            fields: [
                {
                    name: 'average',
                    type: 'number',
                    min: 0,
                    max: 5,
                    defaultValue: 0,
                },
                {
                    name: 'count',
                    type: 'number',
                    defaultValue: 0,
                },
            ],
        },
    ],
    hooks: {
        beforeChange: [
            ({ data }) => {
                if (data.title && !data.slug) {
                    data.slug = data.title
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '');
                }
                return data;
            },
        ]
    }
}