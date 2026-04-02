import DynamicPageTemplate from '../../components/DynamicPageTemplate';

export default async function ResourcesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DynamicPageTemplate category="Resources" slug={slug} />;
}
