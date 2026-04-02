import DynamicPageTemplate from '../../components/DynamicPageTemplate';

export default async function SpecialtiesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <DynamicPageTemplate category="Specialties" slug={slug} />;
}
