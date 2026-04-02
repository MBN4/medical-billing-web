import DynamicPageTemplate from '../../components/DynamicPageTemplate';

export default async function StatesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DynamicPageTemplate category="State Availability" slug={slug} />;
}
