import '@root/global-fonts.css';
import '@root/global.css';
import Image from 'next/image'; // <-- Import the Next.js Image component

import DefaultLayout from '@components/page/DefaultLayout';
import DefaultActionBar from '@components/page/DefaultActionBar';
import Grid from '@components/Grid';
import CardDouble from '@components/CardDouble';
import ActionListItem from '@components/ActionListItem';

export default function ImagePostPage() {
  return (
    <DefaultLayout>
      <DefaultActionBar />
      <br />
      <Grid>
        <ActionListItem icon={`⭠`} href="/">
          Back to Home
        </ActionListItem>
        <br />
        <CardDouble title="Adding Images and Gifs to Your Site">
          <p>
            A blog isn't complete without visuals. In Next.js, the easiest way to handle static images is by placing them in the 'public' folder in your project's root directory.
          </p>
          <br />
          <p>
            From there, you can reference them directly in your code. It's best to use the built-in `Image` component, as it handles optimization, resizing, and lazy loading for you.
          </p>
          <br />
          <Image 
            src="/hiroshi.jpg" 
            alt="A descriptive caption for the diagram" 
            width={500} 
            height={300} 
          />
          <br />
          <p>
            Just make sure to provide a width and height to prevent the layout from shifting as the image loads.
          </p>
        </CardDouble>
      </Grid>
    </DefaultLayout>
  );
}