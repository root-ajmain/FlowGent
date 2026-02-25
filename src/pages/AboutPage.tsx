import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About FlowGent | FlowGent</title>
      </Helmet>
      <PlaceholderPage 
        title="About FlowGent" 
        description="We are a cutting-edge digital agency building ecosystems for modern brands worldwide." 
      />
    </>
  );
}
