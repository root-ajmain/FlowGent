import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | FlowGent</title>
      </Helmet>
      <PlaceholderPage 
        title="Terms of Service" 
        description="Read our terms of service to understand the rules and guidelines for using our platform." 
      />
    </>
  );
}
