import DynamicPageTemplate from '../../components/DynamicPageTemplate';

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DynamicPageTemplate category="Company" slug={slug} />;
}
