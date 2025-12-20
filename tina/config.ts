import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  // When running `tinacms dev`, Tina starts a local GraphQL server (default: http://localhost:4001/graphql).
  // Without this override, the Admin UI can't talk to the local server (and uploads/saves look "broken").
  contentApiUrlOverride: isLocal ? "http://localhost:4001/graphql" : undefined,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Content",
        path: "src/content",
        format: "json",
        match: {
          include: "site",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimary", label: "Primary CTA" },
              { type: "string", name: "ctaSecondary", label: "Secondary CTA" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                fields: [
                  { type: "string", name: "students", label: "Students" },
                  { type: "string", name: "coaches", label: "Coaches" },
                  { type: "string", name: "champions", label: "Champions" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                fields: [
                  { type: "string", name: "years", label: "Years" },
                  { type: "string", name: "coaches", label: "Coaches" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "lead", label: "Lead", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "blurb", label: "Blurb", ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "achievements",
        label: "Achievements",
        path: "src/content",
        format: "json",
        match: { include: "achievements" },
        fields: [
          {
            type: "object",
            name: "items",
            label: "Images",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Image" },
              { type: "string", name: "alt", label: "Alt text" }
            ]
          }
        ]
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "src/content",
        format: "json",
        match: { include: "testimonials" },
        fields: [
          {
            type: "object",
            name: "items",
            label: "Items",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Testimonial" }) },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "title", label: "Title" },
              { type: "number", name: "rating", label: "Rating" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "achievement", label: "Achievement" },
            ],
          },
        ],
      },
    ],
  },
});
