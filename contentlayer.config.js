import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
/** @type {import('contentlayer/source-files')} */

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the article',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the article',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the article',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [ Article ],
  mdx: {
    remarkPlugins: [ remarkGfm ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = [ 'word--highlighted' ];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: [ 'subheading-anchor' ],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
