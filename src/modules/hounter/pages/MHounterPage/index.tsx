import { Container } from '@mui/material';

import { MRecommendation, MSellPreview } from '../../components';

const MHounterPage = () => {
  return (
    <Container>
      <MRecommendation />
      <MSellPreview />
      <div style={{ marginBlock: '30rem' }}></div>
    </Container>
  );
};

export default MHounterPage;
