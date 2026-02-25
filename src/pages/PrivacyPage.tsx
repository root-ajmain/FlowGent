import { Helmet } from 'react-helmet-async';
import PlaceholderPage from '@/components/PlaceholderPage';

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | FlowGent</title>
      </Helmet>
      <PlaceholderPage 
        title="Privacy Policy" 
        description="Your privacy is important to us. Read our privacy policy to learn more." 
      />
    </>
  );
}
