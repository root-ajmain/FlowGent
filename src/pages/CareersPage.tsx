import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers at FlowGent | FlowGent</title>
      </Helmet>
      <PlaceholderPage 
        title="Careers at FlowGent" 
        description="Join us in building the digital future — one brand at a time." 
      />
    </>
  );
}
