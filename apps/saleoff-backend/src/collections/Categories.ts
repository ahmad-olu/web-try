import { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
    slug: 'categories',
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
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'parent',
            type: 'relationship',
            relationTo: 'categories',
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
            name: 'sortOrder',
            type: 'number',
            defaultValue: 0,
        },
    ]
}