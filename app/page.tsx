import '@root/global-fonts.css';
import '@root/global.css';

import DefaultLayout from '@components/page/DefaultLayout';
import DefaultActionBar from '@components/page/DefaultActionBar';
import Grid from '@components/Grid';
import CardDouble from '@components/CardDouble';
import ActionListItem from '@components/ActionListItem';
import BlockLoader from '@components/BlockLoader'; // <-- 1. IMPORT THE BUILT-IN LOADER
import DebugGrid from '@components/Grid';

  
export default async function Page(props) {
  return (
    <DefaultLayout>
      <DefaultActionBar />
      <br />
      <Grid>
        {/* 2. UPDATED INTRO TEXT */}
        <CardDouble title="Welcome">
          A collection of notes, experiments, and articles on computer vision and software development. Currently under construction <BlockLoader mode={9} /> 
        </CardDouble>
        <br />


      </Grid>
    </DefaultLayout>
  );
}