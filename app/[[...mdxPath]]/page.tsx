import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents as getMDXComponents } from '@/mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

interface PageProps {
  params: Promise<{
    mdxPath: string[];
  }>;
}

/**
 * Retrieves and returns the metadata for an MDX page based on the provided path parameters.
 *
 * @param props - Contains a promise resolving to the MDX path segments.
 * @returns The metadata object extracted from the imported MDX page.
 */
export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = getMDXComponents().wrapper;

/**
 * Renders an MDX page dynamically based on the provided path parameters.
 *
 * Loads the MDX content, table of contents, and metadata for the specified path, and renders them within a layout wrapper component.
 */
export default async function Page(props: PageProps) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
