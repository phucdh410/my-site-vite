import { Container } from '@mui/material';

import { MSession1, MSession2, MSession3 } from '../../components';

const MStudioPage = () => {
  return (
    <Container>
      <MSession1 />
      <MSession2 />
      <MSession3 />
      <div style={{ height: '500px', width: '100%' }}></div>
    </Container>
  );
};

export default MStudioPage;
