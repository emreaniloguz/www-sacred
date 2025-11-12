import '@root/global-fonts.css';
import '@root/global.css';

import DefaultLayout from '@components/page/DefaultLayout';
import DefaultActionBar from '@components/page/DefaultActionBar';
import Grid from '@components/Grid';
import CardDouble from '@components/CardDouble';
import ActionListItem from '@components/ActionListItem';
import Package from '@root/package.json';

export default async function Page(props) {
  return (
    <DefaultLayout>
      <DefaultActionBar />
      <br />
      <Grid>
        <CardDouble title={`WELCOME TO ${Package.name.toUpperCase()}`}>
          This is the new, simplified homepage for my personal website.
          <br /><br />
          You can find my blog posts below:
        </CardDouble>
        
        <br />
        {/* <ActionListItem icon={`⭢`} href="/blog/matrix-multiplication">
          A Dive into Matrix Multiplication
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="/blog/adding-images">
          Adding Images and Gifs to Your Site
        </ActionListItem> */}
      </Grid>
    </DefaultLayout>
  );
}