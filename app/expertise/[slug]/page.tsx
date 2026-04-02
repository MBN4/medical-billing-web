import DynamicPageTemplate from '../../components/DynamicPageTemplate';

export default async function ExpertisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DynamicPageTemplate category="Our Expertise" slug={slug} />;
}
