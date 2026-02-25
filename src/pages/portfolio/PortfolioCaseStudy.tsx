import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function PortfolioCaseStudy() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <>
      <Helmet>
        <title>Case Study {id} | FlowGent</title>
      </Helmet>
      <PlaceholderPage 
        title={`Case Study ${id}`} 
        description="Detailed case study and results will be available soon." 
      />
    </>
  );
}
