import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  // auth: true,
  auth: {
    verify: {
      generateEmailHTML: ({ token, user }) => {
        return `<p>Hi ${user.firstName}, please verify your email by clicking <a href="${process.env.PAYLOAD_PUBLIC_SERVER_URL}/verify?token=${token}">here</a></p>`
      },
    },
    forgotPassword: {

      generateEmailHTML: (req) => {
        return `<p>Hi ${req!.user.firstName}, reset your password by clicking <a href="${process.env.PAYLOAD_PUBLIC_SERVER_URL}/reset-password?token=${req!.token}">here</a></p>`
      },
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
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
      name: 'role',
      type: 'select',
      options: [
        { label: 'Customer', value: 'customer' },
        { label: 'Admin', value: 'admin' },
        { label: 'Vendor', value: 'vendor' },
      ],
      defaultValue: 'customer',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'dateOfBirth',
      type: 'date',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'addresses',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Billing', value: 'billing' },
            { label: 'Shipping', value: 'shipping' },
          ],
        },
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
        {
          name: 'isDefault',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'wishlist',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
    },
  ],
}
