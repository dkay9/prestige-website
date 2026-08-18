import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp number",
      type: "string",
      description: "International format, no plus — e.g. 2348000000000",
    }),
    defineField({
      name: "address",
      title: "Office address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "hours",
      title: "Opening hours",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "object",
      fields: [
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "twitter", title: "X / Twitter", type: "url" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});