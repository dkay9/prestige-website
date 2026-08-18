import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. Victoria Island, Lagos",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (naira)",
      type: "number",
      description: "Enter the number only — formatting is automatic",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "beds",
      title: "Bedrooms",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "baths",
      title: "Bathrooms",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "sqft",
      title: "Square feet",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "type",
      title: "Property type",
      type: "string",
      options: {
        list: [
          "Penthouse",
          "Villa",
          "Detached House",
          "Apartment",
          "Duplex",
          "Land",
          "Commercial",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "images",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "coordinates",
      title: "Map location",
      type: "geopoint",
      description: "Drop a pin for the map view",
    }),
    defineField({
      name: "featured",
      title: "Show on homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "location", media: "images.0" },
  },
});