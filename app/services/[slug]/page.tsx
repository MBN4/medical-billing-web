import DynamicPageTemplate from '../../components/DynamicPageTemplate';

export default async function ServicesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DynamicPageTemplate category="Services" slug={slug} />;
}
