import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Our Blog | FlowGent</title>
      </Helmet>
      <PlaceholderPage 
        title="Our Blog" 
        description="Insights, news, and updates from the FlowGent team." 
      />
    </>
  );
}
